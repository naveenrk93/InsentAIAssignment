import React from 'react';
import ChatboxFooter from "./Chatboxfooter";
import ChatboxHeader from "./ChatboxHeader";
import ChatboxMessages from "./ChatboxMessages";
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
        this.props.getUserSession(userId)
    }
}

const mapStateToProps = (state) => {
    return {
        UserSession: state.UserSession
    }
};

export default connect(mapStateToProps, {getUserMessages, getUserSession, getUser})(ChatWidget);
