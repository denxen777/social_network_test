import {User} from "./User/User";
import s from './Users.module.css';
import axios from "axios";
import {Component} from "react";

export class Users extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      const url = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`;

      axios.get(url).then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })

    }
  }

  onPageChange = (page) => {
    const url = `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`;
    this.props.setCurrentPage(page);
    axios.get(url).then((response) => {
      this.props.setUsers(response.data.items);
    })
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalCount / this.props.count);

    const pagesArray = [];
    for (let i = 1; i <= pagesCount; i++) pagesArray.push(i);

    return (
      <div className={s.wrapper}>
        <div className={s.pages}>
          {
            pagesArray.map(page => {
              return (page === this.props.currentPage) ?
                <span className={`${s.activePage} ${s.page}`}>{page}</span> :
                <span className={s.page} onClick={() => this.onPageChange(page)}>{page}</span>
            })
          }
        </div>
        {
          this.props.users.map(user =>
            <User key={user.id} id={user.id} photos={user.photos} name={user.name} status={user.status}
                  location={user.location} followed={user.followed}
                  follow={this.props.follow} unfollow={this.props.unfollow}
                  setUsers={this.props.setUsers}/>)
        }
      </div>
    );
  }
}
