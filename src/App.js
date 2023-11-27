import React, { useState } from "react";
import Chatbot from './comp/Chatbot1';
import './index.css';
import Course from "./comp/Course";
import logo from './/img/logo.png';

const  App = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="grid grid-cols-6 App" >
        <div className='main'>
          <div className="logo">
            <div className="icon"><img src={logo} /></div>
            <div>Шинэ элсэгч таны туслах<br/> MustBOT-д тавтай морил!</div>
          </div>
          
          <div className="tab">
            <ul >
              <li
                className={activeTab === "tab1" ? "active" : ""}
                onClick={handleTab1}
              >
                MustBot
              </li>
              <li
                className={activeTab === "tab2" ? "active2" : ""}
                onClick={handleTab2}
              >
                Сургалт
              </li>
            </ul>
          </div>
        </div>
        <div className='col-span-5'>
          <div className="outlet">
            {activeTab === "tab1" ? <Chatbot /> : <Course/>}
          </div>
        </div>
    </div>
  );
}

export default App;