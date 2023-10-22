import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '../actions'

function CounterComponent({ counter, increment, decrement }) {

    return (
        <div>
            <h1>Counter: {counter} </h1>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);