import s from './UserData.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from '../../../media/images/user-default.jpg';

export function UserData(props) {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={s.userData}>
      <div className={s.avatar}>
        <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt="Изображение"/>
      </div>
      <div className={s.data}>
        <p>{props.profile.fullName}</p>
        <p>{`Обо мне: ${props.profile.aboutMe}`}</p>
        <p>{`Ищу работу: ${props.profile.lookingForAJob}`}</p>
      </div>
    </div>
  );
}
