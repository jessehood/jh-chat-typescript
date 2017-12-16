import { Message } from '../types/Message';
class Messages {
  storage: Message[];
  constructor(storage: Message[] = []) {
    this.storage = storage;
  }

  addMessage(message: Message) {
    this.storage.push(message);
  }

  get messages() {
    return this.storage;
  }
}
export default Messages;