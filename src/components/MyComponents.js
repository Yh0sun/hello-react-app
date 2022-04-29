import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

class MyComponents extends Component {
    // static defaultProps={
    //     name : "디폴트 JS"
    // };

    // constructor(props){
    //     super(props);
    //     this.state={
    //         myValue : 0
    //     };
    //     this.handleMinus = this.handleMinus.bind(this);
    // };

    state={
        myValue : 0
    };

    handleMinus= ()=>{
        this.setState({myValue : this.state.myValue -1})
    };

    render() {
        const {name, age}=this.props;
        const {myValue}=this.state;
        const {handleMinus}=this;
        return (
            <div>
                <h3>Hello {name}/{age}</h3>
                <p>상태변수 {this.state.myValue}</p>
                <p>상태변수 {myValue}</p>
                <button onClick={()=>this.setState({myValue:myValue+1})}>증가</button>
                <button onClick={handleMinus}>감소</button>
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