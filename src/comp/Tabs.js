import React, { useState } from "react";
// import FirstTab from "./AllTabs/FirstTab.js";
// import SecondTab from "./AllTabs/SecondTab.js";
import Chatbot from '../comp/Chatbot1.js';
import '../App.css'
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          tab1
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          tab2
        </li>
        <div className="outlet">
          {activeTab === "tab1" ? <Chatbot /> : ""}
        </div>
      </ul>
    </div>
  );
};
 
export default Tabs;