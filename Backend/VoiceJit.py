import openai
import speech_recognition as sr
import pyttsx3
import os
import json

key = 'API KEY HERE!!'

openai.api_key = key

personality = "personality.txt"

with open(personality, "r") as file:
    mode = file.read()

messages = [{"role": "system", "content": "What is your name?"}]

engine = pyttsx3.init()
# engine = pyttsx3.init(driverName='nss')

voices = engine.getProperty('voices')
engine.setProperty('voice', voices[2].id)

r = sr.Recognizer()
mic = sr.Microphone()
r.dynamic_energy_threshold = False
r.energy_threshold = 400


# BRUH This whisper shit cost money
# while True:
#     with mic as source:
#         print("\nListening...")
#         r.adjust_for_ambient_noise(source, duration = 0.5)
#         audio = r.listen(source)
#         try:
#             with open('speech.wav', 'wb') as f:
#                 f.write(audio.get_wav_data())
#             speech = open('speech.wav', 'rb')
#             wcompletion = openai.Audio.transcribe(
#                 model = "whisper-1",
#                 file = speech
#             )
#             user_input = wcompletion['text']
#             print(user_input)
#         except:
#             continue


# def save_conversation(save_foldername):
#     '''
#     Checks the folder for previous conversations and will get the next suffix that has not been used yet.  
#     It returns suffix number

#     Args:
#         save_foldername (str) : Takes in the path to save the conversation to.
#     '''
    
#     os.makedirs(save_foldername, exist_ok=True)

#     base_filename = 'conversation'
#     suffix = 0
#     filename = os.path.join(save_foldername, f'{base_filename}_{suffix}.txt')

#     while os.path.exists(filename):
#         suffix += 1
#         filename = os.path.join(save_foldername, f'{base_filename}_{suffix}.txt')

#     with open(filename, 'w') as file:
#         json.dump(messages, file, indent=4)

#     return suffix

# def save_inprogress(suffix, save_foldername):
#     '''
#     Uses the suffix number returned from save_conversation to continually update the 
#     file for this instance of execution.  This is so that you can save the conversation 
#     as you go so if it crashes, you don't lose to conversation.  Shouldn't be called
#     from outside of the class.

#     Args:
#         suffix  :  Takes suffix count from save_conversation()
#     '''
#     os.makedirs(save_foldername, exist_ok=True)
#     base_filename = 'conversation'
#     filename = os.path.join(save_foldername, f'{base_filename}_{suffix}.txt')

#     with open(filename, 'w') as file:
#         json.dump(messages, file, indent=4)



# # grab script location
# script_dir = os.path.dirname(os.path.abspath(__file__))
# foldername = "voice_assistant"
# save_foldername = os.path.join(script_dir,f"conversations/{foldername}")
# # suffix = save_conversation(save_foldername)


while True:
    try:
        with mic as source:
            print("\nListening...")
            r.adjust_for_ambient_noise(source, duration = 0.5)
            audio = r.listen(source)
            try:
                user_input = r.recognize_google(audio)
                if user_input == 'quit':
                    break
                print(user_input)
            except:
                continue

        messages.append({"role" : "user", "content" : user_input})


        completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo-0301",
                messages=messages,
                temperature=0.8
            )

        response = completion.choices[0].message.content
        messages.append({"role": "assistant", "content": response})
        print(f"\n{response}\n")
        # save_inprogress(suffix, save_foldername)

        engine.say(f'{response}')
        # engine.runAndWait()
    except Exception as e:
        print(f"Unexpected error: {e}")
        break  # This will exit the loop if an error occurs. You can remove this if you want the loop to continue.