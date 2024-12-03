
import {useDispatch, useSelector} from "react-redux";
import {changeAvatar, changeName} from "../actions/userAction.js";

const Avatar = ({size}) => {


    const {avatar,name} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const avatarUrl = () => prompt('Enter your avatar URL');
    const avatarName = () => prompt('Enter your name');

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const eventMouse = (e) => {
        switch (e.button) {
            case 0:
                { const url = avatarUrl()
                return(isValidUrl(url) ? dispatch(changeAvatar(url)): dispatch(changeAvatar())) }
            case 2:
                { const name = avatarName()
                return dispatch(changeName(name)); }
        }
    }


    return (
        <img onMouseDown={eventMouse}
             onContextMenu={(e) => e.preventDefault()}
             style={{cursor: 'pointer'}}
             className={`user-avatar ${size ?? ''}`}
             src={avatar}
             alt={name}/>
    );
};

export default Avatar;