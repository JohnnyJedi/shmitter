import Stats from "./Stats.jsx";

const Sidebar = ({user,stats,handleUrl}) => {
    return (
        <div className={'sidebar'}>
            <Stats handleUrl={handleUrl} user={user} stats={stats} />
        </div>
    );
};

export default Sidebar;