const Avatar = ({size,user,handleUrl}) => {

const avatarUrl =  () => prompt("Enter your avatar url");

    return (
        <img onClick={() => handleUrl(avatarUrl())} style={{cursor:"pointer"}}
             className={`user-avatar ${size ?? ''}`}
             src={user.avatar}
             alt={user.name}/>

    );
};

export default Avatar;