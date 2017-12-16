import { TypeKeys } from '../actions/chat';

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

export interface SubmitUsernameAction {
  type: TypeKeys.SUBMIT_USERNAME, 
  payload: {
    username: string
  }
}

export type ActionsTypes = 
AddMessageAction | 
GetMessagesAction | 
SubmitUsernameAction;