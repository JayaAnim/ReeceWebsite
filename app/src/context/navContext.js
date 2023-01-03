import { createContext, useState, useEffect } from "react";
import { act } from "react-dom/test-utils";

export const NavContext = createContext();

const NavProvider = ({ children }) => {
    const [activeLinkId, setActiveLinkId] = useState('');
    const providerValue = {
        activeLinkId,
        setActiveLinkId
    }

    return (
        <NavContext.Provider value={providerValue}>
            {children}
        </NavContext.Provider>
    )
}

export default NavProvider