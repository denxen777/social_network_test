import {User} from "./User/User";
import s from './Users.module.css';
import axios from "axios";
import {Component} from "react";

export class Users extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        this.props.setUsers(response.data.items);
      });
    }
  }

  render() {
    return (
      <div className={s.wrapper}>
        {
          this.props.users.map(u => <User key={u.id} id={u.id} photos={u.photos} name={u.name} status={u.status}
                                          location={u.location} followed={u.followed}
                                          follow={this.props.follow} unfollow={this.props.unfollow}
                                          setUsers={this.props.setUsers}/>)
        }
      </div>
    );
  }
}