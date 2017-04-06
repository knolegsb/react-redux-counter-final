import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        console.log(this.props.value);

        for(var i = 0; i < this.props.value.length; i++){
            this.props.value[i]++
        }
        return (
            //<h1>{ this.props.value }</h1>
            <h1>
                {this.props.value.map((v)=>{
                    return<div>{v}</div>
                })}
            </h1>            
        );
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
}

Counter = connect(mapStateToProps)(Counter);

export default Counter;
