import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {
    render() {
        //get current messager's  message
        const messager = this.props.message[this.props.index]

        return (
        <div>
            {messager.message.map((item, index) => {
                return (
                    <Message key={index}
                             messageFromMe={item.messageFromMe}
                             content={item.content} />
                );
            })}
        </div>
        );
    }
}

export default MessageList;

