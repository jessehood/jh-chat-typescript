import { TypeKeys, ActionsTypes } from '../actions/chat';
export type State = Array<{
  text: String;
}>;

export default function (messages: State = [], action: ActionsTypes) {
  switch (action.type) {
    case TypeKeys.ADD_MESSAGE:
      return [...messages, { text: action.payload.message }];
    default:
      return messages;
  }
}