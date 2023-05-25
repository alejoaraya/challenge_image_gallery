import { createContext, useState } from "react";
import Images from "./components/Images";
import Sercher from "./components/Searcher";

export const ImageContext = createContext([]);

function App() {

    const [keyword, setKeyword] = useState('Dachshund')

    return (
        <>
            <ImageContext.Provider value={[keyword, setKeyword]}>
                <Sercher />
                <Images />
            </ImageContext.Provider>

        </>
    );
}

export default App;
