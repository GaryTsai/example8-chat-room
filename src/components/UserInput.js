import React, {Component} from 'react';

class UserInput extends Component {

    render() {
        const {messageChange,handleKeyDown,newMessage} = this.props;
        return (
            <div  className="footer">
                    <input className="new-message"
                           onChange={messageChange}
                           onKeyDown={handleKeyDown}
                    value={newMessage}/>
            </div>
        );
    }
}

export default UserInput;