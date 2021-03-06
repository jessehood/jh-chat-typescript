import * as React from 'react';
import './ChatInput.css';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

interface ChatInputState {
  message: string;
  text: string;
}

class ChatInput extends React.Component<any, ChatInputState> {
  private messageInput: HTMLInputElement;
  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
      message: ''
    };
    
  }

  setMessage = () => {
    this.setState({text: this.messageInput.value});
  }

  submitMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

export default ChatInput;