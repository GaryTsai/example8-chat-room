import React, {Component} from 'react';
import Messager from './components/Messager';
import MessageList from './components/MessageList';
import UserInput from './components/UserInput';
import  './static/App.css';
import  './index.css';
const messagerData= {

  messager: [{
    name: 'Elly', message: [
          {timestamp: '2019-07-10 11:48:12 ', content: '來來來!!', messageFromMe:false},
          {timestamp: '2019-07-10 11:48:24', content: '來甲本~', messageFromMe:false},
          {timestamp: '2019-07-10 11:48:48', content: '要吃嗎?', messageFromMe: false},
          {timestamp: '2019-07-10 11:49:50', content: '來甲本~', messageFromMe: true},
          {timestamp: '2019-07-10 11:50:53', content: '約哪裡?', messageFromMe: true}
        ], img: 'http://lorempixel.com/100/100/cats/3',
  }, {
    name: 'Mercy', message:
        [
          {timestamp: '2019-07-10 12:49:12 ', content: '我要報表!', messageFromMe:false},
        ],
    img: 'http://lorempixel.com/100/100/cats/2'
  }, {
      name: 'Cat', message:
          [
            {timestamp: '2019-07-10 10:12:12 ', content: '喵嗚～',messageFromMe:false},
          ],
      img: 'http://lorempixel.com/100/100/cats/5'
    }],

}


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      messagerData:messagerData,
      messagerIndex:0,
      newMessage:''
    };
  }
  //select messager and change MessagerIndex for chatroom
  messagerChange=(index)=> {
      // console.log('index',index);
      // console.log(this.state.messagerIndex);
      this.setState({
          messagerIndex: index ,
          newMessage:''
      });

  }
  //change newMessage
    messageChange=(e)=>{
        // console.log('messageChange:', e.target.value);
        let newInputMessage = e.target.value;
        this.setState({ newMessage: newInputMessage });
    }

    handleKeyDown=(e)=>{
      console.log('handleKeyDown');
        if(e.keyCode === 13 && e.target.value!==''){
            let ts = new Date();
            messagerData.messager[this.state.messagerIndex].message.push(
                {timestamp: ts.toISOString().substring(0, 19)+'+08:00',
                 content: e.target.value.toString(),
                 messageFromMe:true
                })
            this.setState({
                messagerData:messagerData,
                newMessage:''
            })
        }
    }
    render() {
        return (
            <div>
              <div className="chat-app clearfix">

                <div className="chat-app_left">
                  <div className="heading"><h3 className="messenger-title">Messager  {this.state.messagerIndex}</h3></div>
                  <div className="thread-list">
                    {this.state.messagerData.messager.map((messager, index) => {
                      return (
                          <Messager className="Component-style"
                                    messagerChange={this.messagerChange.bind(this,index)}
                                    key={index}
                                    img={messager.img}
                                    name={messager.name}
                                    message={messager.message}/>
                      );
                    })}
                  </div>
                </div>
                <div className="chat-app_right">
                  <div className="heading">
                    <div className="current-target">{this.state.messagerData.messager[this.state.messagerIndex].name}</div>
                  </div>
                  <div className="message-list">
                    <MessageList message = {this.state.messagerData.messager}
                                 index={this.state.messagerIndex}

                    />
                  </div>
                    {<UserInput
                            newMessage={this.state.newMessage}
                            messageChange={this.messageChange.bind(this)}
                            handleKeyDown={this.handleKeyDown.bind(this)}/>}
                </div>
              </div>
            </div>
        );
    }
}

export default App;