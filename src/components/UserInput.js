import React, {Component} from 'react';

class UserInput extends Component {

    render() {
        const {newMessageChange,handleKeyDown,newMessage} = this.props;
        return (
            <div  className="footer">
                    <input className="new-message"
                           onChange={newMessageChange}
                           onKeyDown={handleKeyDown}
                    value={newMessage}/>
            </div>
        );
    }
}

export default UserInput;