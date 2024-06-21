import { useRef, useEffect, useCallback } from 'react';
import { useMessageStore } from "../../../store/messageStore";

import { Message } from "../components/Message";

import "./messages.css"
import { useLoadingStore } from '../../../store/loadingStore';
import { Typing } from '../../typing/Typing';

export const Messages = () => {
 const {messages} = useMessageStore()
 const messagesContainerRef = useRef<HTMLElement>(null)

 const {isLoading} = useLoadingStore()

 const scrollToBottom = useCallback(() => {
  if (messagesContainerRef.current) {
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight + 50;
  }
}, []);

useEffect(() => {
  scrollToBottom();
}, [scrollToBottom,messages]);

 return (

    <section className="messages" ref={messagesContainerRef}>
      <Message text="Select the language you want to translate into, type your text and hit send!" type="bot" lang={"en_XX"}/>
      {
        messages.map((message, index) => (
            <Message key={index} text={message.text} type={message.type} lang={message.lang}/>
            ))
      }
     {isLoading && <Typing/> }
    </section>
  )
}