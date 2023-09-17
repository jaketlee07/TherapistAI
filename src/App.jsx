import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const result = await axios.post('http://localhost:3000/ask', {
                user_input: userInput
            });
            setResponse(result.data.response);
        } catch (error) {
            console.error('Error making request:', error.message);
            setResponse('Error fetching response.');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Ask the Assistant</h1>

                <textarea 
                    value={userInput} 
                    onChange={handleInputChange} 
                    placeholder="Type your question..."
                    rows={4}
                />

                <button onClick={handleSubmit}>
                    Ask
                </button>

                {response && (
                    <div>
                        <h2>Response:</h2>
                        <p>{response}</p>
                    </div>
                )}
            </header>
        </div>
    );
}

export default App;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import Nav from './components/Nav';
// import Hero from './components/Hero';

// function App() {
//   const [response, setResponse] = useState("");
//   const [userInput, setUserInput] = useState("");
//   const [error, setError] = useState(null);
//   const captureAudio = () => {
//     return new Promise((resolve, reject) => {
//         navigator.mediaDevices.getUserMedia({ audio: true })
//             .then(stream => {
//                 const mediaRecorder = new MediaRecorder(stream);
//                 const audioChunks = [];

//                 mediaRecorder.addEventListener("dataavailable", event => {
//                     audioChunks.push(event.data);
//                 });

//                 mediaRecorder.addEventListener("stop", () => {
//                     const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
//                     const audioUrl = URL.createObjectURL(audioBlob);
//                     const audio = new Audio(audioUrl);
//                     const reader = new FileReader();

//                     reader.onloadend = () => {
//                         resolve(reader.result);
//                     }
                    
//                     reader.readAsDataURL(audioBlob);
//                 });

//                 mediaRecorder.start();

//                 setTimeout(() => {
//                     mediaRecorder.stop();
//                 }, 5000);  // Recording duration: 5 seconds
//             })
//             .catch(reject);
//     });
// };

//   const handleListenClick = async () => {
//     try {
//       const audio = await captureAudio();
//       const { data } = await axios.post('http://localhost:5000/listen', { audio: audio });
//       setUserInput(data.userInput);
//       setResponse(data.response);
//       setError(null);
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred while processing your request.");
//     }
//   };

//   // TODO: Implement the captureAudio function to capture audio from the client's microphone and return it.

//   return (
//     // ... (rest of the code, unchanged)
//     <div className="bg-beige App">
//       <Nav />
//       <Hero />
//       <header className="App-header">
//         <button onClick={handleListenClick}>Start Listening</button>
//         <textarea 
//           value={userInput} 
//           readOnly 
//           placeholder="What the backend is listening to..."
//           rows="4" 
//           cols="50"
//         />
//         {error && <p className="error-message">{error}</p>}
//         <p>{response}</p>
//       </header>
//     </div>
//   );
// }

// export default App;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './App.css';
// // import Nav from './components/Nav';
// // import Hero from './components/Hero';

// // function App() {
// //   const [response, setResponse] = useState("");
// //   const [userInput, setUserInput] = useState("");
// //   const [error, setError] = useState(null); // State to handle errors

// //   const requestMicrophonePermission = async () => {
// //     try {
// //       // Request microphone access
// //       await navigator.mediaDevices.getUserMedia({ audio: true });
// //       return true; // Return true if access is granted
// //     } catch (error) {
// //       if (error.name === 'NotAllowedError') {
// //         alert('Permission to access microphone was denied.');
// //       } else {
// //         alert('An error occurred: ' + error.message);
// //       }
// //       return false; // Return false if access is denied or an error occurs
// //     }
// //   };

// //   const handleListenClick = async () => {
// //     const hasMicPermission = await requestMicrophonePermission();
// //     if (!hasMicPermission) return; // Exit the function if microphone access is not granted

// //     try {
// //       const { data } = await axios.post('http://localhost:5000/listen');
// //       setUserInput(data.userInput);
// //       setResponse(data.response);
// //       setError(null);
// //     } catch (error) {
// //       console.error("Error:", error);
// //       setError("An error occurred while processing your request.");
// //     }
// //   };

// //   return (
// //     <div className="bg-beige App">
// //       <Nav />
// //       <Hero />
// //       <header className="App-header">
// //         <button onClick={handleListenClick}>Start Listening</button>
// //         <textarea 
// //           value={userInput} 
// //           readOnly 
// //           placeholder="What the backend is listening to..."
// //           rows="4" 
// //           cols="50"
// //         />
// //         {error && <p className="error-message">{error}</p>}
// //         <p>{response}</p>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
