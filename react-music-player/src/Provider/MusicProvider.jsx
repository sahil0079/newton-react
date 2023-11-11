import React, { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

function MusicProvider({ children }) {
    const [selectedMusic, setSelectedMusic] = useState({});
    return (
        <MusicContext.Provider value={{ selectedMusic, setSelectedMusic }} >
            {children}
        </MusicContext.Provider>
    )
};

export const useMusic = () => useContext(MusicContext);

export default MusicProvider;