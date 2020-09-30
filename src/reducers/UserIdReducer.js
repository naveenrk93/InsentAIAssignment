export default (state={}, action) => {
    switch(action.type){
        case "GET_USER_ID":
            return action.payload.user.id
        default:
            return state;
    }
}