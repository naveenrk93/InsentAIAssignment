import {combineReducers} from "redux";
import UserReducer from "./UserReducer";
import ChannelReducer from "./ChannelReducer"

export default combineReducers({
    UserSession: UserReducer,
    channelId: ChannelReducer
})