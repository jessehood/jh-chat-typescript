/* tslint-disable no-string-literal */
import axios from 'axios';
(<any> window).axios = axios;
export enum TypeKeys {
  ADD_MESSAGE = 'ADD_MESSAGE',
  GET_MESSAGES = 'GET_MESSAGES'
}
export type Messages = Array<{text: string}>;

export interface AddMessageAction {
  type: TypeKeys.ADD_MESSAGE;
  payload: { message: string };
}

export interface GetMessagesAction { 
  type: TypeKeys.GET_MESSAGES;
  payload: {
    messages: Messages;
  };
}
export type ActionsTypes = 
    AddMessageAction
  | GetMessagesAction;

export const addMessage = (message: {text: String}) => {
  return { type: TypeKeys.ADD_MESSAGE, payload: message };
};

export const getMessages = () => {
  const messages = axios.get('http://localhost:4000/api/messages');
  console.log(messages);
  return { type: TypeKeys.GET_MESSAGES, messages: messages };
};