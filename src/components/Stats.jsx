import Avatar from "./Avatar.jsx";

const Stats = ({user,stats,handleUrl}) => {


    return (
        <div className={'user-stats'}>

            <div>
                <Avatar handleUrl={handleUrl} user={user} alt={user}/>
                {user.name}
            </div>

            <div className={'stats'}>
                <div>
                   Followers : {stats.followers}
                </div>
                <div>
                    Following : {stats.following}
                </div>
            </div>

        </div>
    );
};

export default Stats;