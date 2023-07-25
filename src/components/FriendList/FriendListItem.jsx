import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
            <span className={isOnline? css.online : css.span}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={css.text}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }