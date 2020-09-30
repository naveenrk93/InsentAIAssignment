import {combineReducers} from "redux";
import UserReducer from "./UserReducer";
import ChannelReducer from "./ChannelReducer"
import MessagesReducer from "./MessagesReducer"
import UserIdReducer from "./UserIdReducer"
import PusherReducer from "./PusherReducer"
import ChatWidgetReducer from "./ChatWidgetReducer";

export default combineReducers({
    UserSession: UserReducer,
    ChannelId: ChannelReducer,
    Messages: MessagesReducer,
    UserId: UserIdReducer,
    Pusher: PusherReducer,
    isChatWidgetOpen: ChatWidgetReducer
})