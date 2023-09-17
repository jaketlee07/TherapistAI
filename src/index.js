const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;
const FLASK_SERVER_URL = 'http://127.0.0.1:5000/ask';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Node.js server is running!');
});

app.post('/ask', async (req, res) => {
    try {
        const userInput = req.body.user_input;

        // Make a request to Flask server
        const response = await axios.post(FLASK_SERVER_URL, {
            user_input: userInput
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error contacting Flask server:', error.message);
        res.status(500).send('Error contacting Flask server.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import axios from 'axios';

// ReactDOM.render(<App />, document.getElementById('root'));

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// // import axios from 'axios';

// const RootComponent = () => {
//   const [response, setResponse] = React.useState("");
//   const [userInput, setUserInput] = React.useState("");

//   const requestMicrophonePermission = async () => {
//     try {
//       // Request microphone access
//       await navigator.mediaDevices.getUserMedia({ audio: true });
//       alert('Microphone access granted!');
//     } catch (error) {
//       if (error.name === 'NotAllowedError') {
//         alert('Permission to access microphone was denied.');
//       } else {
//         alert('An error occurred: ' + error.message);
//       }
//     }
//   };

//   const handleListenClick = async () => {
//     try {
//       const result = await axios.post('http://localhost:5000/listen');
//       setUserInput(result.data.userInput);
//       setResponse(result.data.response);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <React.StrictMode>
//       <App />
//       <button onClick={requestMicrophonePermission}>Request Microphone Access</button>
//       <button onClick={handleListenClick}>Start Listening</button>
//       <textarea 
//         value={userInput} 
//         readOnly 
//         placeholder="What the backend is listening to..."
//         rows="4" 
//         cols="50"
//       />
//       <p>{response}</p>
//     </React.StrictMode>
//   );
// };

// ReactDOM.render(<RootComponent />, document.getElementById('root'));
