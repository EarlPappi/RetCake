import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const ContextProvider = ({children}) =>{
    const [loggedIn, setIsLoggedIn] = useState(true);

    return(
        <UserContext.Provider value={{
            loggedIn, 
            setIsLoggedIn
            
        }}>
            {children}
        </UserContext.Provider>
    )
};

export const useAuth = () =>{
    return useContext(UserContext);
}