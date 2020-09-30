import {combineReducers} from "redux";
import UserReducer from "./UserReducer";
import ChannelReducer from "./ChannelReducer"
import MessagesReducer from "./MessagesReducer"
import PusherReducer from "./PusherReducer"
import ChatWidgetReducer from "./ChatWidgetReducer";
import UserIdReducer from "./UserIdReducer"

export default combineReducers({
    UserSession: UserReducer,
    ChannelId: ChannelReducer,
    Messages: MessagesReducer,
    UserId: UserIdReducer,
    Pusher: PusherReducer,
    isChatWidgetOpen: ChatWidgetReducer,
})