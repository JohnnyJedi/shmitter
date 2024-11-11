import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

const Body = ({user,stats,handleUrl}) => {
    return (
        <div className={'body'}>
            <Sidebar handleUrl={handleUrl} user={user} stats={stats}/>
            <Content/>
        </div>
    );
};

export default Body;