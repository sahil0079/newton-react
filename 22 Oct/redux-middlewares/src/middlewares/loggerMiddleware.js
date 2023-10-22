

//logger


// const loggerMiddleware = store => next => action => {

// }


function loggerMiddleware(store) {
    return function (next) {
        return function (action) {

            //Log the current state before the action is processed

            console.log('Current State: ', store.getState());

            //Log the action that is being dispatched

            console.log('Action: ', action);

            const result = next(action);

            //Log the  state after the action is processed

            console.log('Next State: ', store.getState());


            return result

        }
    }
}

export default loggerMiddleware;