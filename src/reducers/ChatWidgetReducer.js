export default (state={}, action) => {
    switch(action.type){
        case "CLOSE_WIDGET":
            return false;
        case "OPEN_WIDGET":
            return true;
        default:
            return state;
    }
}