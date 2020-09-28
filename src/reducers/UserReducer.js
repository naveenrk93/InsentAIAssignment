export default (state={}, action) => {
    switch(action.type){
        case "GET_USER_SESSION":
            return action.payload.session.id;
        case "GET_USER_INFO":
            return action.payload;
        default:
            return state;
    }
}