import {Dialogs} from "./Dialogs";
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";

export function DialogsContainer(props) {
  const state = props.store.getState();

  function updateNewMessage(text) {
    props.store.dispatch(updateMessageTextCreator(text));
  }

  function sendMessage() {
    props.store.dispatch(sendMessageCreator());
  }

  return (
    <Dialogs state={state.dialogsPage} updateNewMessage={updateNewMessage} sendMessage={sendMessage}/>
  );
}