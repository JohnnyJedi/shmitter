import {CHANGE_AVATAR, CHANGE_FOLLOWERS, CHANGE_FOLLOWING, CHANGE_NAME} from "../actions/userAction.js";

export const twitterReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}};
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}};
        case CHANGE_FOLLOWERS:
            return {...state,stats:{...state.stats,
                    followers: state.stats.followers + action.payload >= 0 ? state.stats.followers + action.payload : state.stats.followers}};
        case CHANGE_FOLLOWING:
            return {...state,stats:{...state.stats,
                    following: state.stats.following + action.payload >= 0 ? state.stats.following + action.payload : state.stats.following}};
        default:
            return state;
    }
}