import { useContext, useEffect, useState } from 'react';
import Image from './Image'
import { ImageContext } from '../context/ImageProvider';

function Images() {

    const [images, setImages] = useState(Array<any>)

    const keyword = useContext(ImageContext)

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${'4EnYaxbE-DFhiGP6HRgwPrMiYdt0U1Zb8H0nPb0qdNU'}`)
            .then(res => res.json())
            .then(data => setImages(data.results))
    }, [])

    return (
        <div className="w-[80%] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-2 mx-auto">            
            {(images && images.map(e => <Image img={e} />))}
        </div>
    );
}

export default Images;