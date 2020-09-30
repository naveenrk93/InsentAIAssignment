export default (state={}, action) => {
    switch(action.type){
        case "GET_USER_MESSAGES":
            return action.payload.messages;
        default:
            return state;
    }
}