import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user} = useContext(TwitterContext);
    const {handleUrl} = useContext(TwitterContext)
    const avatarUrl = () => prompt('Enter your avatar URL');

    return (
        <img onClick={() => {
            handleUrl(avatarUrl())
        }} style={{cursor: 'pointer'}}
             className={`user-avatar ${size ?? ''}`}
             src={user.avatar}
             alt={user.name}/>
    );
};

export default Avatar;