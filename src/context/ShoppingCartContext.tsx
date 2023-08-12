import { ReactNode, createContext, useContext, useState } from "react";

const ShoppingCartContent = createContext({} as ShoppingCartContext)

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

type CartItem ={
    id: number
    quantity: number
}

//this is the radio that listens for context
export function useShoppingCart() {
    return useContext(ShoppingCartContent)
}


//radio that broadcasts the context
export function ShoppingCartProvider({children} : ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]> ([])
    
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id) ?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if(cartItems.find(item => item.id === id) === null){
                return [...currItems, {id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id===id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if(cartItems.find(item => item.id === id)?.quantity ===1){
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id===id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContent.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
            {children}
        </ShoppingCartContent.Provider>
    )
}