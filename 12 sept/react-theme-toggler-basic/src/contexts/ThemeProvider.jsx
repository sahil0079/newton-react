import React, { createContext, useContext, useState } from 'react';
//react context api
const ThemeContext = createContext(false);
function ThemeProvider({ children }) {

    const [toggle, setToggle] = useState(false);

    const toggleFunction = () => {
        setToggle(!toggle)
    }
    // console.log(ThemeContext)
    return (
        <ThemeContext.Provider value={{ toggle, toggleFunction }} >
            {children}
        </ThemeContext.Provider>
    )
}
export const useThemeContextValue = () => useContext(ThemeContext);

export default ThemeProvider;