import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import './MyComponents.css'
import '../index.css';

class MyComponents extends Component {
    // static defaultProps={
    //     name : "디폴트 JS"
    // };

    // constructor(props){
    //     super(props);
    //     this.state={
    //         myValue : 0
    //     };
    //      이벤트 핸들러를 쓰려면 21번줄 bind해줘야됨.
    //     this.handleMinus = this.handleMinus.bind(this);
    // };

    state={
        myValue : 0,
        message : '',
        messages: ['Angular','React','Vue','Ember'],
        username : '',
        isValid: false
    };
  //  handleMinus(){}
    handleMinus= ()=>{
        this.setState({myValue : this.state.myValue -1})
    };

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleEnter=(e)=>{
        const {message, messages} = this.state;

        if(e.keyCode=== 13){
            this.setState({
                //messages: messages.concat(message),
                messages: [...messages, message],
                message: '',
                isValid: true,
            }); 
            this.myUsername.focus();
        }
    };
    
    handleDoubleClick = (index) => {
        this.setState({
            messages: this.state.messages.filter((val,idx) => (idx !== index))
        });
    };

    render() {
        const {name, age}=this.props;
        const {myValue, message, username, isValid, messages}=this.state;
        const {handleMinus,handleChange,handleEnter,handleDoubleClick}=this;
        const message_list = messages.map((msg,idx) =>(<li key={idx} onDoubleClick={() => handleDoubleClick(idx)}>{msg}</li>));

        return (
            <div>
                <h3>Hello {name}/{age}</h3>
                <p>상태변수 {this.state.myValue}</p>
                <p>상태변수 {myValue}</p>
                <button onClick={()=>this.setState({myValue:myValue+1})}>증가</button>
                <button onClick={handleMinus}>감소</button>
                
                <p>상태변수 message = {message}</p>
                <input type= "text" name="message" value={message} onChange={handleChange} onKeyDown={handleEnter}/>
                <button onClick={()=>this.setState({message: ''})}>초기화</button>
                <ul>
                    {message_list}
                </ul>

                <p>상태변수 username = {username}</p>
                <input type= "text" name="username" value={username} onChange={handleChange}
                className = {isValid ? 'success':'failure'} ref={(ref) => this.myUsername=ref} />

            </div>
        );
    }
}

MyComponents.defaultProps = {
    name : "디폴트 리액트 JS"
};
MyComponents.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number.isRequired
};

export default MyComponents;