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
      </div>
      <div className='col-span-5'>
      <Chatbot />

      </div>
    </div>
  );
}

export default App;