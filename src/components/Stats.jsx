import Avatar from "./Avatar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeStats} from "../actions/userAction.js";

const Stats = () => {


    const dispatch = useDispatch();

    const {name} = useSelector(state => state.user);
    const{following,followers} = useSelector(state => state.stats);



    const eventStats = (e) => {
        const field = e.currentTarget.getAttribute("data-field");
        switch (e.button) {
            case 0:
                return dispatch(changeStats(field,1));
            case 2:
                return dispatch(changeStats(field,-1));
        }
    }




    return (
        <div className={'user-stats'}>

            <div>
                <Avatar/>
                {name}
            </div>

            <div className={'stats'}>
                <div style={{cursor: 'cell'}}  data-field={'CHANGE_FOLLOWERS'} onContextMenu={(e) => e.preventDefault()} onMouseDown={eventStats}>
                    Followers : {followers}
                </div>
                <div style={{cursor: 'cell'}} data-field={'CHANGE_FOLLOWING'} onContextMenu={(e) => e.preventDefault()} onMouseDown={eventStats}>
                    Following : {following}
                </div>
            </div>

        </div>
    );
};

export default Stats;