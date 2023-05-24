import { useEffect, useState } from "react";
import Images from "./components/Images";
import Sercher from "./components/Searcher";

function App() {

    const [images, setImages] = useState([])
    let keyword = 'Dachshund';

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${'4EnYaxbE-DFhiGP6HRgwPrMiYdt0U1Zb8H0nPb0qdNU'}`)
            .then(res => res.json())
            .then(data => setImages(data.results))
    }, [])

    function changeName(searching:string) {
        keyword = searching;
    }

    return (
        <>
        <Sercher />
        <Images />
        </>
    );
}

export default App;
