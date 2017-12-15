export enum TypeKeys {
  ADD_MESSAGE = 'ADD_MESSAGE'
}
export interface AddMessageAction {
  type: TypeKeys.ADD_MESSAGE;
  payload: {
    message: String
  };
}
export type ActionsTypes = 
  AddMessageAction;

export const addMessage = (message: String) => {
  return { type: TypeKeys.ADD_MESSAGE, payload: message };
};