import PropTypes from 'prop-types';
import css from './Profile.module.css'

const defaultImage = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png";

export const Profile = ({
  username,
  tag,
  location,
  avatar = defaultImage,
  followers,
  views,
  likes }) => {
  return (
<div className={css.thumb}>
  <div className={css.description}  >
    <img
      src={avatar ?? defaultImage}
      alt="User avatar"
      className={css.img}
    />
    <p className={css.text}>{username}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span className={css.span}>Followers</span>
      <span className={css.span}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.span}>Views</span>
      <span className={css.span}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.span}>Likes</span>
      <span className={css.span}>{likes}</span>
    </li>
  </ul>
</div>
  )
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}

