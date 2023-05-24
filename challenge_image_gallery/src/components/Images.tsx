import { useEffect, useState } from "react";
import Image from './Image'

function Images() {

    return (
        <div className="w-[80%] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-2 mx-auto">
            {(images && images.map(e => <Image img={e} />))}
        </div>
    );
}

export default Images;