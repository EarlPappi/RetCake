import { createContext, useContext, useEffect, useState } from "react";
import vanillaIcing from "../Assets/closeup-shot-delicious-cupcakes-with-cream-cherries-top-vintage-books 1.png";
import tripleLayer from "../Assets/tony-eight-media--uZNyLofoPw-unsplash 2.png";
import nakedChoco from "../Assets/front-view-delicious-cake-concept 1.png";
import assortementCake from "../Assets/assortment-pieces-cake 1.png";
import rolledChoco from "../Assets/chocolate-roll-cake 1.png";
import festiveCake from "../Assets/festive-dessert-birthday-valentine-dayred-velvet-cake-with-fireworks 1.png";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { auth } from "../Firebase";

const UserContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const [loggedIn, setIsLoggedIn] = useState(false);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logout = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            return currentUser
        });

        return (()=>{
            unsubscribe();
        });

    }, []);

    const cakes = [
        {
            id: 1,
            name: "Vanilla Icing Cupcake with Grape Toppings",
            price: 35,
            img: vanillaIcing,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vero maxime consequatur ut quae. Repellendus nulla veritatis suscipit magnam, ut sed tenetur magni. Minima ipsam dolore dolorem. Officiis, modi iure molestiae commodi doloribus placeat, dolore laboriosam reiciendis eligendi ipsa nisi."
        },
        {
            id: 2,
            name: "3 Layers Flavor Wedding Cake",
            price: 220,
            img: tripleLayer,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vero maxime consequatur ut quae. Repellendus nulla veritatis suscipit magnam, ut sed tenetur magni. Minima ipsam dolore dolorem. Officiis, modi iure molestiae commodi doloribus placeat, dolore laboriosam reiciendis eligendi ipsa nisi."
        },
        {
            id: 3,
            name: "Naked Chocolate with Toppings",
            price: 100,
            img: nakedChoco,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vero maxime consequatur ut quae. Repellendus nulla veritatis suscipit magnam, ut sed tenetur magni. Minima ipsam dolore dolorem. Officiis, modi iure molestiae commodi doloribus placeat, dolore laboriosam reiciendis eligendi ipsa nisi."
        },
        {
            id: 4,
            name: "4 Different Plate Cake With Toppings",
            price: 120,
            img: assortementCake,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vero maxime consequatur ut quae. Repellendus nulla veritatis suscipit magnam, ut sed tenetur magni. Minima ipsam dolore dolorem. Officiis, modi iure molestiae commodi doloribus placeat, dolore laboriosam reiciendis eligendi ipsa nisi."
        },
        {
            id: 5,
            name: "Rolled Chocolate cake with Strawberry Icing",
            price: 80,
            img: rolledChoco,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vero maxime consequatur ut quae. Repellendus nulla veritatis suscipit magnam, ut sed tenetur magni. Minima ipsam dolore dolorem. Officiis, modi iure molestiae commodi doloribus placeat, dolore laboriosam reiciendis eligendi ipsa nisi."
        },
        {
            id: 6,
            name: "Festive/Birthday Cake with Candle",
            price: 90,
            img: festiveCake,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vero maxime consequatur ut quae. Repellendus nulla veritatis suscipit magnam, ut sed tenetur magni. Minima ipsam dolore dolorem. Officiis, modi iure molestiae commodi doloribus placeat, dolore laboriosam reiciendis eligendi ipsa ."
        }
    ];

    const [cartItems, setCartItems] = useState([])

    const addToCart = (cake) =>{
        if(!loggedIn){
            alert("You need to log in to perform this action");
            return;
        }
    }

    return (
        <UserContext.Provider value={{
            loggedIn,
            setIsLoggedIn,
            cakes,
            signup,
            login,
            resetPassword,
            logout,
            user,
            addToCart,
            cartItems, 
            setCartItems

        }}>
            {children}
        </UserContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(UserContext);
}