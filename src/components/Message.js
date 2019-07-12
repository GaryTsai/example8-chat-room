import React, {Component} from 'react';

class Message extends Component {
    render() {
        const {messageFromMe,content} = this.props
        let style=`message-item  ${messageFromMe ? "message-from-me" : "message-from-other"}`;
        return (
            <div>
                <div className={style} ><span >{content}</span></div>
            </div>
        );
    }
}

export default Message;
