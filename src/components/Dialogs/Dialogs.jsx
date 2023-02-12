import s from './Dialogs.module.css';
import React from "react";
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";

export function Dialogs(props) {
  const dialogsElements = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name} img={d.img}/>);
  const messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>);

  function onNewMessageChange(e) {
    props.dispatch(updateMessageTextCreator(e.target.value));
  }

  function onSendMessageClick() {
    props.dispatch(sendMessageCreator());
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.addMessage}>
          <textarea onChange={onNewMessageChange} value={props.state.messageText} cols={30} rows={2}></textarea>
          <button onClick={onSendMessageClick}>Отправить</button>
        </div>
      </div>
    </div>
  );
}
