import * as React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, NavItem } from 'react-bootstrap';
import { submitUsername } from '../../actions/chat';

interface ModalLoginProps {
  submitUsername: (username: string) => void;
}

interface ModalLoginState {
  showModal: boolean;
  username: string;
}
class ModalLogin extends React.Component<ModalLoginProps, ModalLoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false,
      username: ''
    };
  }
  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  submitUsername = () => {
    this.props.submitUsername(this.state.username);
  }

  bindInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({username: e.currentTarget.value});
    e.currentTarget.value = '';
  }
  render() {
    return (
      <div>
        <NavItem eventKey={2} href="#" onClick={this.open}>
          <span style={{color: '#9d9d9d'}}>Login</span>
        </NavItem>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Select a username</h4>
            <p>
              Enter your username to continue: <input onChange={this.bindInput} value={this.state.username} />
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.submitUsername}>Submit</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { submitUsername })(ModalLogin);
