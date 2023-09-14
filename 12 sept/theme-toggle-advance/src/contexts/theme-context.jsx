import React, { createContext, useContext, useEffect, useState } from 'react';

//setup react context api

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
};

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
};

const ThemeContext = createContext(initialState);

function ThemeProvider(props) {
    //default theme is light
    const [dark, setDark] = useState(false);

    //toggle between dark and light

    useEffect(() => {
        console.log('useEffect called')
        const isDark = localStorage.getItem('dark') === 'true';
        setDark(isDark);
    }, [dark])

    function toggle() {
        //set the preference into local storage
        localStorage.setItem('dark', JSON.stringify(!dark))
        setDark(!dark);
        // console.log('togglecalled', !dark)

    };

    const theme = dark ? themes.dark : themes.light;


    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {props.children}
        </ThemeContext.Provider>
    )

}

// function useThemeContextValue(){
// return useContext(ThemeContext);
// } ;

const useThemeContextValue = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContextValue };