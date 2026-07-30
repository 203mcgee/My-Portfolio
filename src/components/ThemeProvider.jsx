
import React from 'react'
import { createContext, useState } from 'react'
import ReactSwitch from "react-switch";
// import { ThemeContext } from 'styled-components';
// import 'App.css'

const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    return (
        <>
            <ThemeContext.Provider>
                <div id={theme}>
                    {/* <App/> */}
                    <div className='switch'>
                        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                    </div>
                    {children}
                </div>

            </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvider;