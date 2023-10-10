import { Component, createContext } from "react";

//setup react context API

//step 1: Create a context

const MyContext = createContext();

//step 2: 

class MyProvider extends Component {
    state = {
        message: 'Hello from the Context',
    }
    updateMessage = () => {
        console.log('updateMessagecalled')
        this.setState({ message: 'Message Updated!' })
    }

    render() {

        return (
            <MyContext.Provider value={{ state: this.state, updateMessage: this.updateMessage }} >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

//step 4 - Creating a consumer component
class MyConsumer extends Component {
    render() {

        return (
            <MyContext.Consumer>
                {(context) => {

                    console.log('context', context)
                    return (
                        <div>
                            <h1>{context.state.message}</h1>
                            <button onClick={context.updateMessage}>Update Message</button>
                        </div>
                    )

                }}
                {/* {function (value) {
                    console.log('value', value)
                    return (
                        <div>
                            <h1>{value.message}</h1>
                            <button onClick={this.props.updateMessage}>Update Message</button>
                        </div>
                    )
                }} */}
            </MyContext.Consumer>
        )
    }
}


class App extends Component {


    render() {

        return (
            <div>

                <h1>Class Based Components + Context API Example</h1>

                <MyProvider>
                    <MyConsumer />
                </MyProvider>
            </div>
        )
    }
}

export default App;