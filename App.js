import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from './ChatFeed';
import LoginForm from "./LoginForm";

const App = () =>{

if(!localStorage.getItem('username')) return <LoginForm/>

return(
  <ChatEngine
  height="100vh"
  projectID="6f1fe1e5-e4dd-425d-b5d8-8a8c67bfa55c"
  userName={localStorage.getItem('username')}
  userSecret={localStorage.getItem('password')}
  renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
  />
);
} 
  

export default App;
