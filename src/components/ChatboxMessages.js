import React from 'react'
import {connect} from "react-redux";
import {getPusher, getUser, getUserMessages, getUserSession} from "../actions";
import Pusher from 'pusher-js'

class ChatboxMessages extends React.Component{

    renderMessagesList(){

        if(!this.props.UserId || this.props.UserId === {})
            return null
        if(!this.props.Messages || !this.props.Messages.map)
            return null;
        let items = this.props.Messages.map((item) => {

            if(item.type=="notification")
                return <li className="notification-list-item" key={item.id}>{item.notification}</li>
            else if (item.type=="text")
                return <li className="text-list-item" key={item.id}>{item.text}</li>
            else if (item.type=="input")
                return (
                    <li className="input-list-item" key={item.id}>
                        <p>{item.input[0].name}</p>
                        <input className="input-list-item-input" type={item.input[0].type} placeholder={`Enter ${item.input[0].name}`} key={item.input[0].key} />
                    </li>
                )
            });
        return items;

    }

    render(){
        return (
            <div className="chatbox-messages">
                {this.renderMessagesList()}
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
        UserId: state.UserId
    }
};

export default connect(mapStateToProps, {getPusher, getUserMessages, getUserSession, getUser})(ChatboxMessages);
