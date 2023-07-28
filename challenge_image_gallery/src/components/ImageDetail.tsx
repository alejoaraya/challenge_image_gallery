const ImageDetail = (props: any) => {

    // console.log(props)


    return (

        <div className="h-[100vh] w-[100vw] bg-white flex flex-row flex-wrap overflow-y-auto sm:h-[90vh] sm:w-[90vw]">
            <div className="hero  sm:w-[50%]">
                <img className="w-full shadow-md md:max-h-[110vh]" src={props.data.img.urls.small} alt={props.data.img.alt_description} />
                <a className="m-2 place-self-end btn btn-warning btn-xs md:btn-sm" href={props.data.img.links.download}>Look image</a>
            </div>
            <div className="p-10 sm:w-[50%]">
                <h1 className="font-semibold tracking-wider uppercase">{props.data.img.alt_description}</h1>
                <hr className="my-3" />
                <h3 className="text-sm md:text-base">{props.data.img.alt_description}</h3>
                <h3 className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, molestias. Ducimus iste ea obcaecati accusantium eveniet est dicta incidunt illum ratione modi beatae tenetur id natus labore cumque, nemo numquam!</h3>
            </div>
        </div>
    );
}

export default ImageDetail;