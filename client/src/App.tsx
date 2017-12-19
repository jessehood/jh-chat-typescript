import * as React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import ChatInput from './components/ChatInput/ChatInput';
class App extends React.Component {
  render() {
    return (
      <div>
        <Chat />
        <ChatInput />
      </div>
    );
  }
}

export default App;
