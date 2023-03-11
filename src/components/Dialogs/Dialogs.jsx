import s from './Dialogs.module.css';
import React from "react";
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {Navigate} from "react-router-dom";

export function Dialogs(props) {
  const dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog key={d.id} name={d.name} img={d.img}/>);
  const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>);

  function onNewMessageChange(e) {
    props.updateNewMessage(e.target.value);
  }

  function onSendMessageClick() {
    props.sendMessage();
  }

  if (!props.isAuth) {
    return <Navigate to={'/login'}/>
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.addMessage}>
          <textarea onChange={onNewMessageChange} value={props.dialogsPage.messageText} cols={30} rows={2}></textarea>
          <button onClick={onSendMessageClick}>Отправить</button>
        </div>
      </div>
    </div>
  );
}
