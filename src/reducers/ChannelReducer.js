export default (state={}, action) => {
    switch(action.type){
        case "GET_USER_SESSION":
            return action.payload.channelId;
        default:
            return state;
    }
}