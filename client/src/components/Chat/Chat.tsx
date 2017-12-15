import * as React from 'react';
import { connect } from 'react-redux';
import './Chat.css';

interface ChatProps {
  messages: Array<{
    text: String;
  }>;
}
class Chat extends React.Component<ChatProps, {}> {
  constructor(props: ChatProps) {
    super(props);
  }
  render() {
    return (
      <div className="Chat">
        {this.props.messages.map((message, i) => <div key={i}>{message.text}</div>)}
      </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    messages: state
  };
};
export default connect(mapStateToProps, null)(Chat);