import React, { Component, useState } from 'react'
import './App.css'

class LifeCycleMethodsExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        console.log('Constructor is called');

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps is called ')
        // if(nextProps.updatedCount !== prevState.count){
        //    //update state when updatedCount props changes
        //   return {count: nextProps.updatedCount}
        // }
        return null; //no update is needed
    }

    componentDidMount() {
        console.log('Component Did Mount');
        console.log('------------------------------------------');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate is called');

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate is called');
        console.log('prev State', prevState);
        console.log('current state', this.state);

        return null
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did Update');
        console.log('prev State', prevState);
        console.log('current state', this.state);

        console.log('------------------------------------------');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
        console.log('------------------------------------------');

    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        console.log('Render is called')

        return (
            <div className='app'>
                <p>Count: {this.state.count} </p>
                <button onClick={this.increment} >Increment</button>
            </div>
        )
    }
}



function App() {
    const [show, setShow] = useState(false)
    return (
        <div>
            {show && <LifeCycleMethodsExample />}
            <button onClick={() => setShow(!show)} >show Component</button>
        </div>
    )
}

export default App