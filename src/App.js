import React, { useState, useEffect } from "react";
import { List, ListItem} from "@material-tailwind/react";
import Chatbot from './comp/Chatbot1';
import './index.css';
import Course from "./comp/Course";
import logo from './/img/logo.png'
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const  App = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    window.location.reload();
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="grid grid-cols-6 App" > 
        <div className='main'>
          <div className="logo">
            <div className="icon"><img src={logo}/></div>
            <button className="chatBtn"
                hidden={!activeTab === "tab1" ? "active" : ""}
                onClick={handleTab1}>Шинэ чат</button>
            <span className="lowerthird">Шинэ элсэгч таны туслах <b>MustBOT</b>-д тавтай морил!</span>
          </div>
      <List className="tabs">
        <ListItem className="tab"
                hidden={!activeTab === "tab2" ? "active2" : ""}
                onClick={handleTab2}>
                  <PeopleIcon fontSize="small"/>
                  <span className="menuText">Бидний тухай</span>
                  </ListItem>
        <ListItem className="tab"
                hidden={!activeTab === "tab2" ? "active2" : ""}
                onClick={handleTab2}>
                <LibraryBooksIcon fontSize="small"/>
                <span className="menuText">Сургалт</span>
                  </ListItem>
        <ListItem className="tab"
                hidden={!activeTab === "tab2" ? "active2" : ""}
                onClick={handleTab2}>
                <HandshakeIcon fontSize="small"/>
                <span className="menuText">Хамтын ажиллагаа</span>
                  </ListItem>
        <ListItem className="tab"
                hidden={!activeTab === "tab2" ? "active2" : ""}
                onClick={handleTab2}>
                <ApartmentIcon fontSize="small"/>
                <span className="menuText">Салбар нэгж</span>
                  </ListItem>
        <ListItem className="tab"
                hidden={!activeTab === "tab2" ? "active2" : ""}
                onClick={handleTab2}>
                <QueryStatsIcon fontSize="small"/>
                <span className="menuText">Эрдэм шинжилгээ</span>
                  </ListItem>
        <ListItem className="tab"
                hidden={!activeTab === "tab2" ? "active2" : ""}
                onClick={handleTab2}>
                <SchoolIcon fontSize="small"/>
                <span className="menuText">Оюутан</span>
                  </ListItem>
        <ListItem className="tab"
                hidden={!activeTab === "tab2" ? "active2" : ""}
                onClick={handleTab2}>
                <QuestionMarkIcon fontSize="small"/>
                <span className="menuText">Тусламж</span>
                  </ListItem>
      </List>
      
      <span className="foot">Бүх эрх хуулиар хамгаалагдсан <br/> 2023 © mustBot LLC</span>
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