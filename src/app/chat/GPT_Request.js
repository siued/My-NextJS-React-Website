import { API_key } from "./API_key";

export default function sendGPTRequest(messages) {
    // API key is private, so it is stored in a file which won't be uploaded to GitHub
    // this is not a good solution but it works for now
    const api_key = API_key();

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