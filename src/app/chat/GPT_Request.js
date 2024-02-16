let api_key = process.env.OPENAI_API_KEY;
if (!api_key) {
    try {
        const API_KEY = require('./API_key.js');
        api_key = API_KEY();
    } catch(error) {
        console.error('Error fetching API key from ENv variable and API_key.js file:', error);
    }
}

export default function sendGPTRequest(messages) {

    const URL = 'https://api.openai.com/v1/chat/completions';

    const request = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + api_key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages.map(
            (message, index) => {
                if (index % 2 == 0) return {role: "user", content: message}
                else return {role: "assistant", content: message}
            })
      })
    };

    return fetch(URL, request);
}