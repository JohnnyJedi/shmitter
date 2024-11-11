import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import avatar from "./components/Avatar.jsx";

 // https://gravatar.com/avatar/000?d=robohash
// https://gravatar.com/avatar/000?d=retro


const App = () => {
    const[user, setUser] = useState({
        name:'Monster',
        avatar:'https://gravatar.com/avatar/000?d=monsterid',
    });
    const[stats, setStats] = useState({
        followers: 10,
        following: 100,
    });

    const handleUrl = (url) => {
        if(!url){
            setUser(user)
        }else {
            setUser((prevState) => ({
                ...prevState,
                avatar: url,
            }));
        }
    }


    return (
        <div className={'app'}>
            <Navigation handleUrl={handleUrl} user={user}  />
            <Body handleUrl={handleUrl}  user={user} stats={stats}/>
        </div>
    );
};

export default App;
