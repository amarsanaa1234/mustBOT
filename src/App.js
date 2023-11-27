import React from 'react';
import Chatbot from './comp/Chatbot1';
import './index.css';
import Tabs from './comp/Tabs';

function App() {
  return (
    <div className="grid grid-cols-6 App" >
      <div className='main'>
      </div>
      <div className='col-span-5'>
      <Chatbot />
      {/* <Tab /> */}
    </div>
  );
}

export default App;

