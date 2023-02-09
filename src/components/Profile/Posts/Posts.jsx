import s from './Posts.module.css';
import React from "react";
import {Post} from "./Post/Post";

export function Posts(props) {
  const postsElements = props.state.posts.map(p => <Post id={p.id} message={p.message}/>);

  const elem = React.createRef();

  function onChangeText() {
    props.store.updatePostText(elem.current.value);
  }

  function addPost() {
    props.store.addPost();
  }

  return (
    <div className={s.posts}>
      <div className={s.createPost}>
        <textarea onChange={onChangeText} ref={elem} value={props.state.postText} cols={30} rows={5}></textarea>
        <button onClick={addPost}>Новая запись</button>
      </div>
      {postsElements}
    </div>
  );
}