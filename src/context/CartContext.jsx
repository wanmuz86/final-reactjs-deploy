import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({children} ) => {

    // State inside the provider
    const initialState = {
        cart:[]
    }

    // Actions on the provider
    const cartReducer = (state,action) => {
        
        switch (action.type) {

            case 'ADD_ITEM':

            // I verify first if the item exists in the cart
            
            const existingItemIndexAdd = state.cart.findIndex(cartItem => cartItem.item.id === action.payload.item.id)
           
            if (existingItemIndexAdd !== -1){
                // If it exists I update the quantity by adding 1
                const updatedCart = [...state.cart]; // copy current cart into a new variable
                updatedCart[existingItemIndexAdd].quantity +=1; // Increment the value
                return {
                    ...state,
                    updatedCart
                }

            }
            else {
                // If it does not exists, I will add new item in the cart (same as yesterday)
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }

           

            case 'REMOVE_ITEM':

            return state

            case 'EMPTY_CART':
                return {
                    ...state,
                    cart: []
                };


            default:
                return state;
            
        }        

    } ;
    const [state,dispatch] = useReducer(cartReducer,initialState);

    //mutation
    const totalItemsInCart = state.cart.reduce((total, item)=>total + item.quantity, 0)
    
    return (
        <CartContext.Provider value={{state,dispatch,totalItemsInCart}}>
            {children}
        </CartContext.Provider>
    )

}

const useCart = () => {
    const context = useContext(CartContext);
    if (!context){
        throw new Error('useCart must be used within a Cart Provider')
    }
    return context;
}

export {CartProvider,useCart};