import * as React from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../../actions/chat';
import './Chat.css';
import io from 'socket.io-client';
import ChatMessage from '../ChatMessage/ChatMessage';

const socket = io('http://localhost:5000');

interface Message {
  text: string;
}

interface ChatProps {
  messages: Message[];
  getMessages: () => Message[];
}

class Chat extends React.Component<ChatProps, any> {
  constructor(props: ChatProps) {
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

const mapStateToProps = (state) => {
  return {
    messages: state
  };
};
export default connect(mapStateToProps, { getMessages })(Chat);