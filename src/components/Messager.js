import React, {Component} from 'react';
import moment from 'moment-timezone';


class Messager extends Component {
    //when click the messager change UI to the messager's message
    changeMessageIndex=()=>{
        let messageIndex = this.props.index;
        this.props.messagerChange(messageIndex);
    }
    render() {
        const imgStyle={
            width: "50px",
            height:" 50px"
        }
        const pointer={
            cursor: 'pointer'
        }
        const {name,img,message}=this.props;
        return (
            <div >
                <li className="thread-item" style={pointer} onClick={this.changeMessageIndex}>
                    <div className="clearfix">
                        <div className="thread-item_left">
                            <img className="img-circle img"  src={img} alt=""  style={imgStyle}/>
                        </div>
                        <div className="thread-item_right">
                            <div className="thread-from">{name}</div>
                            <div><span className="thread-content">{message[message.length-1].content}</span></div>
                            <span className="thread-time">{moment.tz(message[message.length-1].timestamp, "Asia/Taipei").format()}</span></div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Messager;