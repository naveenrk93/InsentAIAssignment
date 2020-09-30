import React from 'react'
import {getUser, getUserMessages, getUserSession, PostUserResponse} from "../actions";
import {connect} from "react-redux";
import UserIdReducer from "../reducers/UserIdReducer";

class Chatboxfooter extends React.Component{

    render(){
        return (
            <div className="chatbox-footer">
                <button className="ui primary button" onClick={()=>{this.props.PostUserResponse(this.props.UserId, this.props.UserSession, this.props.ChannelId)}}>Send</button>
            </div>
        )
    }

    async componentDidMount() {
        let userId = localStorage.getItem("userId");
        await this.props.getUserSession(userId)
        localStorage.getItem("userId")
        await this.props.getUserMessages(localStorage.getItem("userId"), this.props.ChannelId)
    }
}

const mapStateToProps = (state) => {
    return {
        UserSession: state.UserSession,
        ChannelId: state.ChannelId,
        Messages: state.Messages,
        UserId: state.UserId,
        Pusher: state.Pusher
    }
};

export default connect(mapStateToProps, {getUserMessages, getUserSession, getUser, PostUserResponse})(Chatboxfooter);
