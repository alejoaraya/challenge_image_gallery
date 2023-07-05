import { useContext, useEffect, useState } from 'react';
import Image from './Image'
import { ImageContext } from '../App';
import Find from './Find';

function Images() {

    const [keyword] = useContext(ImageContext)

    const [images, setImages] = useState(Array<any>)

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=4EnYaxbE-DFhiGP6HRgwPrMiYdt0U1Zb8H0nPb0qdNU`)
            .then(res => res.json())
            .then(data => setImages(data.results))
    }, [keyword])

    return (
        <>
            {/* {images.length > 0 ? <Find text={`Imágenes encontradas de: ${keyword}`} /> : <Find text={`No se encontraron resultados`} />} */}
            <div className='flex justify-center'>
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {(images && images.map((e, i) => <Image key={i} img={e} />))}
                </div>
            </div>
        </>

    );
}

export default Images;