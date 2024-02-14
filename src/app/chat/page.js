'use client'

import { useState } from 'react';
import React from 'react';
import { Input_Div } from './Input_Div';
import Message_List from './Message_List';
import Header from '../Header';

function GPT_Page() {

  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])

  return (
    <div>
        <Header />
        <div className="dark:bg-gray-600 dark:text-lime-100 text-center min-h-screen p-10 justify-center space-y-10">
        <Message_List messages={messages} />
        {Input_Div(loading, setLoading, messages, setMessages)}
        </div>
    </div>
      
  );
}

export default GPT_Page;
