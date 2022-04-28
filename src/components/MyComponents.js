import React, { Component } from 'react';

class MyComponents extends Component {
    render() {
        const {name}=this.props;
        return (
            <div>
                <h3>Hello {name}</h3>
            </div>
        );
    }
}

export default MyComponents;