import React, { useState } from 'react';
import { question, answer } from './data';
import logo from '../img/logo.png'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Chatbot = () => {
  const [messages, setMessages] = useState([
    ' Сайн уу! Та асуух зүйлээ доорх сонголтоос сонгоно уу?',
  ]);

  const getResponse = (message) => {
    for (const key in answer) {
      if (message.includes(key)) {
        return answer[key];
      }
    }
    return "Уучлаарай асуултыг ойлгосонгүй. Сонголтоос сонгоно уу!!!";
  };

  const clickme = (value) => {
    console.log(value);
    setMessages([...messages, `${value}`, ` ${getResponse(value)}`]);
  }

  // var scrollBox = document.getElementById('scrollBox');
  // scrollBox.scrollTop = scrollBox.scrollHeight; // Scroll to the bottom initially

  // setInterval(function() {
  //   scrollBox.scrollTop = scrollBox.scrollHeight; // Auto-scroll to the bottom periodically
  // }, 2000); // Change the interval as needed (milliseconds)

  return (
    <div className='container'>
      <div className="chat-container" id='scrollbox'>
        {messages.map((message, index) => (
          <div className={message.startsWith(' ') ? 'chatRobot' : 'chatUser'}>
            {message.startsWith(' ') ? <SmartToyOutlinedIcon fontSize="medium" />: <PersonOutlineOutlinedIcon fontSize="medium" />}
            <div key={index} className={message.startsWith(' ') ? 'bot-message' : 'user-message'}>
              {message}
            </div>
          </div>
        ))}
      </div>
      <div className='questionBox'>
          {question.map((option, index) => (
              <button className='button' key={index} onClick={() => 
                clickme(option.question)
              }>
                <div className='question'>
                  {option.question}
                </div>
              </button>
          ))}
        </div>
      </div>
  );
};

export default Chatbot;
