import * as React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import ChatInput from './components/ChatInput/ChatInput';
import NavigationBar from './components/NavigationBar/NavigationBar';
class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Chat />
        <ChatInput />
      </div>
    );
  }
}

export default App;
