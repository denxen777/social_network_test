import s from './User.module.css';
import userPhoto from '../../../media/images/user-default.jpg';
import {Component} from "react";

export class User extends Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.wrap1}>
          <div className={s.avatar}>
            <img src={this.props.photos.small !== null ? this.props.photos.small : userPhoto} alt="avatar"/>
          </div>
          <div>
            {this.props.followed ?
              <button onClick={() => this.props.unfollow(this.props.id)}>Отписаться</button> :
              <button onClick={() => this.props.follow(this.props.id)}>Подписаться</button>}
          </div>
        </div>
        <div className={s.wrap2}>
          <div className={s.wrap3}>
            <div>{this.props.name}</div>
            <br/>
            <div>{this.props.status}</div>
          </div>
          <div>
            {'props.location.city' + ', ' + 'props.location.country'}
          </div>
        </div>
      </div>
    );
  }
}