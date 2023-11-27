import React from 'react';
import Chatbot from './comp/Chatbot1';
import Tab from './comp/tab';
import './index.css';

function App() {
  return (
    <div className="grid grid-cols-12 App" >
      <div className='col-span-2 main'>
      </div>
      <div className='col-span-10'>
      <Chatbot />

      </div>
    </div>
  );
}

export default App;
