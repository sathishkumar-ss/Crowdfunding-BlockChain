import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = async (event) => {
    if (event.key === 'Enter' && input !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', content: input },
      ]);

      try {
        const API_KEY = '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';
        const response = await axios.post(
          'https://api.openai.com/v1/completions',
          {
            prompt: `Complete this sentence: "${input}"`,
            model: 'text-davinci-002',
            max_tokens: 1050,
            n: 1,
            stop: 'exit',
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_KEY}`,
            },
          }
        );

        const answer = response.data.choices[0].text.trim();
        if (input.toLowerCase() === 'how to create a campaign') {
          setMessages((prevMessages) => [
            ...prevMessages,
    { 
      type: 'bot', 
      content: `Step 1: click the "Connect" button.
               Step 2: Connect with metamask.
               Step 3: Fill out the campaign details such as the title, description, funding goal, end date,and image adding.
               Step 4: Launch the campaign!.
               step 5:check the profile `
    },
  ]);
    } 
   else if (input.toLowerCase() === 'what is this site about') {
      setMessages((prevMessages) => [
        ...prevMessages,
{ 
  type: 'bot', 
  content: `this is an crowdfunding using blockchain site.`
},
]);
}
else if (input.toLowerCase() === 'who created this site') {
  setMessages((prevMessages) => [
    ...prevMessages,
{ 
type: 'bot', 
content: `This site was created by binary tree nodes team.`
},
]);
}

else if (input.toLowerCase() === 'who are you') {
  setMessages((prevMessages) => [
    ...prevMessages,
{ 
type: 'bot', 
content: `I am an EDP bot`
},
]);
}
else if (input.toLowerCase() === 'hi') {
  setMessages((prevMessages) => [
    ...prevMessages,
{ 
type: 'bot', 
content: `Welcome how can i help you.`
},
]);
}
else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'bot', content: answer },
          ]);
        }

      } catch (error) {
        console.error(error);
      }

      setInput('');
    }
  };
  const handleSendClick = () => {
    if (input !== '') {
      handleInput({ key: 'Enter' });
    }
  };
    return (<>
    <div class="chat_img"><img src="   https://cdn-icons-png.flaticon.com/512/8943/8943377.png " width="110" height="20" alt="" title="" class="img-small"></img></div>
      <div className="heading">HELP BOT</div>
      <div className="chatbot-container">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chatbot-message ${message.type}`}>
              {message.content}
            </div>
          ))}
        </div>
        <div className="chatbot-input-container">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleInput}
            className="chatbot-input"
            placeholder="Ask me something!"
          />
          <button className="chatbot-send-button" onClick={handleSendClick}>
            Send
          </button>
        </div>
        
      </div></>
    );
    
};

export default Chatbot;
