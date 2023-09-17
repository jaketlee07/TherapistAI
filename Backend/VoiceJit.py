import openai
import speech_recognition as sr
import pyttsx3
from flask import Flask, request, jsonify

key = 'API KEY'

openai.api_key = key

personality = "personality.txt"
with open(personality, "r") as file:
    mode = file.read()

messages = [{"role": "system", "content": "What is your name?"}]

engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[2].id)

r = sr.Recognizer()
mic = sr.Microphone()
r.dynamic_energy_threshold = False
r.energy_threshold = 400

app = Flask(__name__)

@app.route('/ask', methods=['POST'])
def ask():
    global messages  # Needed to modify the global copy of messages

    user_input = request.json['user_input']

    messages.append({"role": "user", "content": user_input})

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-0301",
        messages=messages,
        temperature=0.8
    )

    response = completion.choices[0].message.content
    messages.append({"role": "assistant", "content": response})

    engine.say(f'{response}')
    # engine.runAndWait()  # Comment this out if you don't want to hear the response
    
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
