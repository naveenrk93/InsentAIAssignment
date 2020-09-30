import React from 'react';
import ChatboxFooter from "./Chatboxfooter";
import ChatboxHeader from "./ChatboxHeader";
import ChatboxMessages from "./ChatboxMessages";
import {getUser, getUserMessages, getUserSession, openWidget} from './../actions'
import {connect} from 'react-redux';


class ChatWidget extends React.Component{

    render(){

        if(this.props.isChatWidgetOpen)
            return (
                <div className="chatbox">
                    <ChatboxHeader />
                    <ChatboxMessages />
                    <ChatboxFooter />
                </div>
            );
        return(
            <div className="openchatbox" onClick={() => this.props.openWidget()}>
                <i className="comment icon inverted big"></i>
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
        UserSession: state.UserSession,
        isChatWidgetOpen: state.isChatWidgetOpen
    }
};

export default connect(mapStateToProps, {getUserMessages, getUserSession, getUser, openWidget})(ChatWidget);
