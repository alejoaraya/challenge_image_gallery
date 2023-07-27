import { createContext, useState } from "react";
import Images from "./components/Images";
import Sercher from "./components/Searcher";

export const ImageContext = createContext([]);

function App() {

    const [keyword, setKeyword] = useState('Dachshund')

    return (
        <div className="flex flex-col items-center justify-center my-4">
            <div className="w-[90vw] ">
                <div className="flex justify-center">
                    <a target="_blank" className="text-lg font-semibold tracking-widest text-gray-400 uppercase" href="https://github.com/Shacaso/challenge_image_gallery">Image Galery</a>
                </div>
                <ImageContext.Provider value={[keyword, setKeyword]}>
                    <Sercher />
                    <Images />
                </ImageContext.Provider>

            </div >
        </div>
    );
}

export default App;
