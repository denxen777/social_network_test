import s from './Dialogs.module.css';
import React from "react";
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";

export function Dialogs(props) {
  const dialogsElements = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name} img={d.img}/>);
  const messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>);

  const elem = React.createRef();

  function onChangeText() {
    props.store.updateMessageText(elem.current.value);
    //props.updateMessageText(elem.current.value);
  }

  function addMessage() {
    props.store.addMessage();
    //props.addMessage();
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.addMessage}>
          <textarea onChange={onChangeText} ref={elem} value={props.state.messageText} cols={30} rows={2}></textarea>
          <button onClick={addMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
}