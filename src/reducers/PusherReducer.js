export default (state={}, action) => {
    switch(action.type){
        case "GET_PUSHER":
            return action.payload;
        default:
            return state;
    }
}