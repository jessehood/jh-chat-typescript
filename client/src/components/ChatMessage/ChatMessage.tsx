import * as React from 'react';
import './ChatMessage.css';

interface ChatMessageProps {
  text: String;
}

class ChatMessage extends React.Component<ChatMessageProps, {}> {
  constructor(props: ChatMessageProps) {
    super(props);
  }
  render() {
    return (
      <div className="Chat">{this.props.text}</div>
      );
    }
}

export default ChatMessage;