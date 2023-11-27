import React, { useState, useEffect } from 'react';
import { question, answer } from './data';
import logo from '../img/logo.png'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Chatbot = () => {
  var scrollBox;
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
  useEffect(() => {
    const scrollBox = document.getElementById('scrollbox');
    scrollBox.scrollTop = scrollBox.scrollHeight;
  }, [messages]);
  return (
    <div className='container'>
      <div className='header'></div>
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
