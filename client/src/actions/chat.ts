import axios from 'axios';
(<any> window).axios = axios;
export enum TypeKeys {
  ADD_MESSAGE = 'ADD_MESSAGE',
  GET_MESSAGES = 'GET_MESSAGES',
  SUBMIT_USERNAME = 'SUBMIT_USERNAME'
}

export const addMessage = (message: {text: String}) => {
  return { type: TypeKeys.ADD_MESSAGE, payload: message };
};

export const getMessages = () => {
  const messages = axios.get('http://localhost:4000/api/messages');
  console.log(messages);
  return { type: TypeKeys.GET_MESSAGES, payload: {messages} };
};

export const submitUsername = (username: string) => {
  console.log('username to submit');
  console.log(username);
  return { type: TypeKeys.SUBMIT_USERNAME, payload: {username}};
};