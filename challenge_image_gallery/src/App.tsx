import { createContext, useState } from "react";
import Images from "./components/Images";
import Sercher from "./components/Searcher";

export const ImageContext = createContext([]);

function App() {

    const [keyword, setKeyword] = useState('Dachshund')

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[90vw] ">
                <ImageContext.Provider value={[keyword, setKeyword]}>
                    <Sercher />
                    <Images />
                    <Images />
                </ImageContext.Provider>

            </div >
        </div>
    );
}

export default App;
