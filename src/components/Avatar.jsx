import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, handleUrl, handleName} = useContext(TwitterContext);

    const avatarUrl = () => prompt('Enter your avatar URL');
    const avatarName = () => prompt('Enter your name');

    const eventMouse = (e) => {
        switch (e.button) {
            case 0:
                return handleUrl(avatarUrl());
            case 2:
                e.preventDefault();
                return handleName(avatarName());
        }
    }


    return (
        <img onMouseDown={eventMouse}
             style={{cursor: 'pointer'}}
             className={`user-avatar ${size ?? ''}`}
             src={user.avatar}
             alt={user.name}/>
    );
};

export default Avatar;