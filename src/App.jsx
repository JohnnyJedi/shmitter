import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";


// https://gravatar.com/avatar/000?d=retro
// https://gravatar.com/avatar/000?d=wavatar

const App = () => {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
    });
    const [stats, setStats] = useState({
        followers: 10,
        following: 100,
    });

    const handleUrl = (url) => {
        if (!url) {
            setUser(user)
        } else {
            setUser((prevState) => ({
                ...prevState,
                avatar: url,
            }))
        }
    }

    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, stats, handleUrl    //user:user , stats:stats
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    );
};

export default App;
