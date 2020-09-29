import React from 'react';
import ChatboxFooter from "./Chatboxfooter";
import ChatboxHeader from "./ChatboxHeader";
import ChatboxMessages from "./ChatboxMessages";
import crypto from "crypto";
import {getUser, getUserMessages, getUserSession} from './../actions'
import {connect} from 'react-redux';


class ChatWidget extends React.Component{
    render(){
        return(
            <div className="chatbox">
                <ChatboxHeader />
                <ChatboxMessages />
                <ChatboxFooter />
            </div>
        );
    }

    componentDidMount() {
        let userId = localStorage.getItem("userId");
        if(userId === null)
        {
            var current_date = (new Date()).valueOf().toString();
            var random = Math.random().toString();
            userId = crypto.createHash('sha1').update(current_date + random).digest('hex');
            localStorage.setItem("userId", userId)
        }
        this.props.getUserSession(userId)
    }
}

const mapStateToProps = (state) => {
    return {
        UserSession: state.UserSession
    }
};

export default connect(mapStateToProps, {getUserMessages, getUserSession, getUser})(ChatWidget);
