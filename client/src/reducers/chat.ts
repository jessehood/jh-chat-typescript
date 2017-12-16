import { TypeKeys } from '../actions/chat';
import { ActionsTypes } from '../types/actions';
export type State = Array<{
  text: String;
}>;

export default function (messages: State = [], action: ActionsTypes) {
  switch (action.type) {
    case TypeKeys.ADD_MESSAGE:
      return [...messages, { text: action.payload.message }];
    case TypeKeys.GET_MESSAGES: 
      return action.payload.messages;
    default:
      return messages;
  }
}