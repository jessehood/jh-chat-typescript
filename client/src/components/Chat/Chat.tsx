import * as React from 'react';
import './Chat.css';
import io from 'socket.io-client';
import ChatMessage from '../ChatMessage/ChatMessage';

const socket = io('http://localhost:5000');

interface Message {
  text: string;
}

interface ChatState {
  messages: Message[];
}

class Chat extends React.Component<any, ChatState> {
  constructor(props: any) {
    super(props);
    this.state = {
      messages: []
    };
    socket.on('get-messages', (messages: Message[] = []) => {
      this.setState({messages});   
      console.log(this.state);
    });
    socket.on('new-message', (message: Message) => {
      this.setState({messages: [...this.state.messages, message]});
    });
  }
  render() {
    return (
      <div className="Chat">
        {this.state.messages.map((message, i) => <ChatMessage key={i} text={message.text} />)}
      </div>
      );
    }
}
export default Chat;