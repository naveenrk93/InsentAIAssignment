import InsentAPI from './../APIS/insent';
import Pusher from "pusher-js";

export const getUser = (userId) => async dispatch => {
    const response = await InsentAPI.post('/pusher/presence/auth/visitor?userId='+userId,{},{
        headers: {
            Authorization: "Bearer V9WxVwHha8pFPNCMz2PK"
        }
    });

    dispatch({
        type: "GET_USER_INFO",
        payload: response.data
    })
};

export const getUserMessages = (UserId, channel_id) => async dispatch => {
    const response = await InsentAPI.get(`/user/channels/${channel_id}`,  {
        headers: {
            Authorization: "Bearer V9WxVwHha8pFPNCMz2PK",
            userId: UserId
        }
    })

    dispatch({
        type: "GET_USER_MESSAGES",
        payload: response.data
    })
}

export const getUserId = () => async dispatch => {

}

export const getUserSession = (UserId) => async dispatch => {
    const response = await InsentAPI.get('/getuser?url=insent-recruitment.web.app%2F', {
        headers: {
            Authorization: "Bearer V9WxVwHha8pFPNCMz2PK",
            userId: UserId
        }
    })


    dispatch({
        type: "GET_USER_SESSION",
        payload: response.data
    })
}

export const PostUserResponse = (UserId, UserSession, ChannelId) => async dispatch => {
    const pusher = new Pusher('67bb469433cb732caa7a', {
        cluster: "mt1",
        authEndpoint: 'https://insentrecruit.api.insent.ai/pusher/presence/auth/visitor?userid=' + UserId,
        auth: {
            headers: {
                Authorization: "Bearer V9WxVwHha8pFPNCMz2PK",
            },
        },
    });
    pusher.logToConsole = true;
    console.log(pusher);

    let channel = await pusher.subscribe('presence-insentrecruit-widget-user-'+UserId)
    await channel.bind('server-message', ()=>{
        console.log("here");
    })
    await channel.bind('client-widget-message', ()=>{
        console.log("there");
    })

    let triggered = await channel.trigger('client-widget-message', {})
    console.log(triggered)
    const response = await InsentAPI.post('/user/pageVisit/spentTime/'+UserSession,
        {
            timeSpent: 10,
            events: [{eventType: "USER_DATA_PROVIDED", timestamp: 1601352199999, url: 'insent-recruitment.web.app/', props: {channelId: ChannelId, field: "email"}}]
        },
        {
        headers:{
            Authorization: "Bearer V9WxVwHha8pFPNCMz2PK",
            userId: UserId
        }
    })
}

export const getPusher = (pusher) => dispatch => {
    dispatch({
        type: "GET_PUSHER",
        payload: pusher
    })
}

export const closeWidget = () => dispatch => {
    dispatch({
        type: "CLOSE_WIDGET"
    })
}

export const openWidget = () => dispatch => {
    dispatch({
        type: "OPEN_WIDGET"
    })
}
