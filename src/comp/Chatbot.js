import React, { useState, useEffect } from 'react';
import { collection, tulbur , surgalt , ans } from './data1';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Chatbot = ({mainTitle}) => {
  var scrollBox;
  const [hiddenHeader, setHiddenHeader] = useState(true);
  const [messages, setMessages] = useState([
    ' Сайн уу! Та асуух зүйлээ доорх сонголтоос сонгоно уу?',
  ]);
  const [hiddenQuestionTulbur, setHiddenQuestionTulbur]  = useState(true);
  const [questionhidden, setQuestionhidden]  = useState(false);
  const [hiddenQuestionSurgalt, setHiddenQuestionSurgalt]  = useState(true);
  const [answer, setAnswer] = useState([{}]);
  const [question, setQuestion] = useState([{}]);

  const url = "http://localhost:4000";


  const getResponse = (message) => {
    for(var i = 0;i <= ans.length; i++){
        var item = ans[i];
        console.log(item);
      if (message.includes(item.key)) {
        return item.answer;
      }
    }
    return " Уучлаарай, ойлгосонгүй ээ сда";
  };


  const  getQuestion = (type) => {
      if(type ==  "tulbur")  
        setHiddenQuestionTulbur(false);
      if(type ==  "surgalt") 
        setHiddenQuestionSurgalt(false);
      setQuestionhidden(true);
      
  }


  const clickme = (value,type,option) => {
    console.log(value);
    if(option == 1){
      getQuestion(type);
    } else if(option ==  2) setMessages([...messages, `${value}`,`${getResponse(value)}`]);
    else {
      setHiddenQuestionTulbur(true);
      setHiddenQuestionSurgalt(true);
      setQuestionhidden(false);
    }
  }

  const subTitleClick = (id) => {
    fetch(url + "/question/" + id)
         .then(response => response.json()) // Parse the response as JSON
         .then(data => {
            console.log("question == > ",data);
            setQuestion(data);
            setHiddenQuestionTulbur(false);
            setQuestionhidden(true);
         })
         .catch(err => {
            console.log(err.message);
         });
  }
  const questionClick = (id) => {
    fetch(url + "/answer/" + id)
         .then(response => response.json()) // Parse the response as JSON
         .then(data => {
            console.log("answer == > ",data);
            setAnswer(data);
            setHiddenQuestionTulbur(false);
            setQuestionhidden(true);
         })
         .catch(err => {
            console.log(err.message);
         });
  }


  useEffect(() => {
    const scrollBox = document.getElementById('scrollbox');
    scrollBox.scrollTop = scrollBox.scrollHeight;
    
    if(scrollBox.scrollHeight > visualViewport.height-100) setHiddenHeader(false);
  }, [messages]);

  return (
    <div className='container'>
      <div className='header' hidden={hiddenHeader}></div>
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

      <div className='questionBox' hidden = {questionhidden} >
          {mainTitle.map((option, index) => (
              <button className='button' key={index} 
              // onClick={() => clickme(option.question, option.type, option.option)}
              onClick={() => subTitleClick(option.ID)}
              >
                <div className='question'>
                  {option.NAME}
                </div>
              </button>
          ))}
      </div>
      <div className='questionBox' hidden = {hiddenQuestionTulbur}>
          {question.map((option, index) => (
              <button className='button' key={index} 
              // onClick={() => clickme(option.question, option.type, option.option)}
                onClick={() => questionClick(option.ID)}
              >
                <div className='question'>
                  {option.QUESTION_TITLE}
                </div>
              </button>
          ))}
      </div>      
    </div>
  );
};

export default Chatbot;
