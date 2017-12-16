import { Message } from '../types/Message';

class User {
  id: number;
  username: string;
  messages: Messsage[];
  constructor(username: string, id: number, messages: Message[] = []) {
    this.username = username;
    this.id = id;
    this.messages = messages;
  }
}

export default User;