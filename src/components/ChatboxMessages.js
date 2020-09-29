import React from 'react'
import {connect} from "react-redux";
import {getUser, getUserMessages, getUserSession} from "../actions";

class ChatboxMessages extends React.Component{

    render(){
        return (
            <div className="chatbox-messages">

            </div>
        )
    }


    componentDidMount() {
        console.log("CHANNEL ID");
        console.log(this.props.ChannelId);
        this.props.getUserMessages(localStorage.getItem("userId"), this.props.ChannelId)
    }
}
const mapStateToProps = (state) => {
    return {
        UserSession: state.UserSession,
        ChannelId: state.channelId
    }
};

export default connect(mapStateToProps, {getUserMessages, getUserSession, getUser})(ChatboxMessages);
