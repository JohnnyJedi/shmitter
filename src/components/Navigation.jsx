import Avatar from "./Avatar.jsx";

const Navigation = ({user,handleUrl}) => {
    return (
        <div className="nav">
            <Avatar handleUrl={handleUrl} user={user} size={'small'}/>
        </div>
    );
};

export default Navigation;