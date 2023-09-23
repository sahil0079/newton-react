//initialstate and reducer function

export const initialState = {
    cart: [],
};

function reducer(state, action) {
    console.log('action', action)
    switch (action.type) {
        case 'ADD_TO_CART':
            //logic to add an item to the cart
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            //logic to remove an item from the cart

            let newCart = [...state.cart]

            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            console.log('index', index)
            if (index >= 0) {
                newCart.splice(index, 1);
            }

            return { ...state, cart: newCart };

        default:
            return state;

    }

};

export default reducer;