import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {

    const [cartItem,SetCarItem] = useState({});

    const addToCart = (itemId) => {
        SetCarItem((prev) => {
            if (!prev[itemId]) {
                return { ...prev, [itemId]: 1 };
            } else {
                return { ...prev, [itemId]: prev[itemId] + 1 };
            }
        });
    };

    const removeFromCart = (itemID) => {
        SetCarItem((prev) => ({...prev, [itemID]: prev[itemID] - 1}));
    };

    const contextValue = {
            food_list,
            cartItem,
            SetCarItem,
            addToCart,
            removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
};

export default StoreContextProvider;