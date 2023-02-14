import s from './Posts.module.css';
import React from "react";
import {Post} from "./Post/Post";

export function Posts(props) {
  const postsElements = props.state.posts.map(p => <Post id={p.id} message={p.message}/>);

  function onNewMessageChange(e) {
    props.updateNewMassage(e.target.value);
  }

  function onAddPostClick() {
    props.addPost();
  }

  return (
    <div className={s.posts}>
      <div className={s.createPost}>
        <textarea onChange={onNewMessageChange} value={props.state.postText} cols={30} rows={5}></textarea>
        <button onClick={onAddPostClick}>Новая запись</button>
      </div>
      {postsElements}
    </div>
  );
}
