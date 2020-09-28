import React from 'react'

class ChatboxHeader extends React.Component{

    render(){
        return (
            <div className="chatbox-header">
                <img className="ui circular image avatar" src="https://driftt.imgix.net/https%3A%2F%2Ffile2.api.drift.com%2Fdata%2Fdrift-prod-file-uploads%2Fe52a%252Fe52a3fb2c15830b3cdb1bca58e1ff87a%2Favatar.svg%3FmimeType%3Dimage%252Fsvg%252Bxml?fit=max&fm=png&h=200&w=200&s=2a282ad7982e855955cf75658f84eb19" />
                <div className="chatbox-header-title">NaveenBot</div>
                <i className="ellipsis inverted horizontal icon big"></i>
                <i className="close inverted icon big"></i>
            </div>
        )
    }
}

export default ChatboxHeader