import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [userInput, setUserInput] = useState('');
    const [assistantResponse, setAssistantResponse] = useState('');

    const FLASK_SERVER_URL = 'http://127.0.0.1:5000/ask';

    const sendMessage = async () => {
        try {
            const response = await axios.post(FLASK_SERVER_URL, { user_input: userInput });
            setAssistantResponse(response.data.response);
        } catch (error) {
            console.error("Error connecting to the Flask server:", error);
            setAssistantResponse("Error connecting to the Flask server");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message here..."
                rows="5"
                cols="50"
            />
            <br />
            <button onClick={sendMessage}>Send</button>
            <div>
                <strong>Assistant:</strong> {assistantResponse}
            </div>
        </div>
    );
}

export default App;
