import React, {Component} from 'react';

class MessageItem extends Component {
    render() {
        let style=`message-item  ${this.props.messageFromMe ? "message-from-me" : "message-from-other"}`;
        return (
            <div>
                <div className={style} ><span >{this.props.content}</span></div>
            </div>
        );
    }
}

export default MessageItem;
