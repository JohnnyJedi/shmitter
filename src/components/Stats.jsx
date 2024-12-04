import Avatar from "./Avatar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeFollowers, changeFollowing} from "../actions/userAction.js";

const Stats = () => {

    const dispatch = useDispatch();

    const {name} = useSelector(state => state.user);
    const {following, followers} = useSelector(state => state.stats);



    const eventFollowers = (e) => {
        switch (e.button) {
            case 0:
                return dispatch(changeFollowers(1));
            case 2:
                return dispatch(changeFollowers(-1));
        }
    }

    const eventFollowing = (e) => {
        switch (e.button) {
            case 0:
                return dispatch(changeFollowing(1));
            case 2:
                return dispatch(changeFollowing(-1));
        }
    }

    return (
        <div className={'user-stats'}>

            <div>
                <Avatar/>
                {name}
            </div>

            <div className={'stats'}>
                <div style={{cursor: 'cell'}} data-field={'CHANGE_FOLLOWERS'} onContextMenu={(e) => e.preventDefault()}
                     onMouseDown={eventFollowers}>
                    Followers : {followers}
                </div>
                <div style={{cursor: 'cell'}} data-field={'CHANGE_FOLLOWING'} onContextMenu={(e) => e.preventDefault()}
                     onMouseDown={eventFollowing}>
                    Following : {following}
                </div>
            </div>

        </div>
    );
};

export default Stats;