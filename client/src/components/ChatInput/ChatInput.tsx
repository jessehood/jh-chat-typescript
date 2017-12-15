import * as React from 'react';
import { connect } from 'react-redux';
import './ChatInput.css';
import { addMessage } from '../../actions/chat';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');
interface ChatInputProps {
  addMessage: (message: any) => void;
}

interface ChatInputState {
  message: string;
  text: string;
}

class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
  private messageInput: HTMLInputElement;
  constructor(props: ChatInputProps) {
    super(props);
    this.state = {
      text: '',
      message: ''
    };
    socket.on('message-client', (message) => {
      this.props.addMessage(message);
    });
    
  }

  setMessage = () => {
    this.setState({text: this.messageInput.value});
  }

  submitMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.addMessage({message: this.state.text});
    socket.emit('message-server', this.state.text);
    this.messageInput.value = '';
  }

  render () {
    return (
      <div className="ChatInput__container">
        <form onSubmit={this.submitMessage}>
          <input 
            ref={(ref: HTMLInputElement) => this.messageInput = ref}
            onChange={this.setMessage} 
            className="ChatInput" 
            placeholder="Add a message..." 
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { addMessage })(ChatInput);