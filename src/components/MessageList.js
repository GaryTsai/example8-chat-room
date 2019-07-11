import React, {Component} from 'react';
import MessageItem from './MessageItem';

class MessageList extends Component {
    render() {
        const messager = this.props.message[this.props.index]

        return (
        <div>
            {messager.message.map((item, index) => {
                return (
                    <MessageItem key={index}
                                 messageFromMe={item.messageFromMe}
                                 content={item.content} />
                );
            })}
        </div>
        );
    }
}

export default MessageList;

