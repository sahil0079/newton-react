


function anotherMiddleware(store) {
    return function (next) {

        return function (action) {

            //middleware logic here

            console.log('Another middlewate is processing the action:', action);

            //you can also modify the state or action if needed

            // let result = next(action);

            // return result;

            return next(action);

        }
    }
}

export default anotherMiddleware;