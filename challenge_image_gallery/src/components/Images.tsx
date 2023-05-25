import { useContext, useEffect, useState } from 'react';
import Image from './Image'
import { ImageContext } from '../App';
import Find from './Find';




function Images() {

    const [keyword] = useContext(ImageContext)

    const [images, setImages] = useState(Array<any>)


    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${'4EnYaxbE-DFhiGP6HRgwPrMiYdt0U1Zb8H0nPb0qdNU'}`)
            .then(res => res.json())
            .then(data => setImages(data.results))
    }, [keyword])

    return (
        <>
            {images.length > 0 ? <Find text={`Find: ${keyword}`}/> : <Find text={`Not Match`}/>}
            {/* {images.length > 0 ? <h1>Find: {keyword}</h1> : <h1>Not Match</h1>} */}
            <div className="w-[80%] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-2 mx-auto">
                {(images && images.map((e, i) => <Image key={i} img={e} />))}
            </div>
        </>

    );
}

export default Images;