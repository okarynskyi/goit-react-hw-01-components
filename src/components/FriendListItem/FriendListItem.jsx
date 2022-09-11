import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
    const background = {backgroundColor: isOnline ? 'green' : 'red'}
    return (
        <li className={css.item} key={id}>
            <span className={css.status} style={background}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};