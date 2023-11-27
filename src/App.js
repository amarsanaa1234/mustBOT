import React from 'react';
import Chatbot from './comp/Chatbot1';
import Tab from './comp/tab';
import './index.css';

function App() {
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
