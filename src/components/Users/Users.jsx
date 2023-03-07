import s from "./Users.module.css";
import {User} from "./User/User";

export const Users = (props) => {
  const pagesCount = Math.ceil(props.totalCount / props.count);

  const pagesArray = [];
  for (let i = 1; i <= pagesCount; i++) pagesArray.push(i);

  return (
    <div className={s.wrapper}>
      <div className={s.pages}>
        {
          pagesArray.map((page, index) => {
            return (page === props.currentPage) ?
              <span key={index} className={`${s.activePage} ${s.page}`}>{page}</span> :
              <span key={index} className={s.page} onClick={() => props.onPageChange(page)}>{page}</span>
          })
        }
      </div>
      {
        props.users.map(user =>
          <User key={user.id} id={user.id} photos={user.photos} name={user.name} status={user.status}
                followed={user.followed} followingInProgress={props.followingInProgress}
                follow={props.follow} unfollow={props.unfollow}/>)
      }
    </div>
  );
}
