import InsentAPI from './../APIS/insent';

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
    const response = await InsentAPI.post('/user/channel/'+channel_id,  {},{
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

export const getUserSession = (UserId) => async dispatch => {
    console.log(UserId)
    const response = await InsentAPI.get('/getuser?url=insent-recruitment.web.app%2F', {
        headers: {
            Authorization: "Bearer V9WxVwHha8pFPNCMz2PK",
            userId: UserId
        }
    })

    console.log(response);

    dispatch({
        type: "GET_USER_SESSION",
        payload: response.data
    })
}
