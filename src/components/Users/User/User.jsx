import s from './User.module.css';
import userPhoto from '../../../media/images/user-default.jpg';
import {NavLink} from "react-router-dom";
import axios from "axios";

export function User(props) {
    return (
        <div className={s.container}>
            <div className={s.wrap1}>
                <div className={s.avatar}>
                    <NavLink to={'../profile/' + props.id}>
                        <img src={props.photos.small !== null ? props.photos.small : userPhoto} alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    {
                        props.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '60611e76-dd29-4405-9c67-fd1747a81f00'
                                    }
                                }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(props.id);
                                        }
                                    });
                            }}>Отписаться</button> :

                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '60611e76-dd29-4405-9c67-fd1747a81f00'
                                    }
                                }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(props.id);
                                        }
                                    });
                            }}>Подписаться</button>
                    }
                </div>
            </div>
            <div className={s.wrap2}>
                <div className={s.wrap3}>
                    <div>{props.name}</div>
                    <br/>
                    <div>{props.status}</div>
                </div>
                <div>
                    {'props.location.city' + ', ' + 'props.location.country'}
                </div>
            </div>
        </div>
    );
}
