import React, {Component} from 'react';


class Messager extends Component {

    render() {
        const imgStyle={
            width: "50px",
            height:" 50px"
        }
        const pointer={
            cursor: 'pointer'
        }

        return (
            <div >
                <li className="thread-item" style={pointer} onClick={this.props.messagerChange}>
                    <div className="clearfix">
                        <div className="thread-item_left">
                            <img className="img-circle img"  src={this.props.img} alt=""  style={imgStyle}/>
                        </div>
                        <div className="thread-item_right">
                            <div className="thread-from">{this.props.name}</div>
                            <div><span className="thread-content">{this.props.message[this.props.message.length-1].content}</span></div>
                            <span className="thread-time">{this.props.message[this.props.message.length-1].timestamp}</span></div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Messager;