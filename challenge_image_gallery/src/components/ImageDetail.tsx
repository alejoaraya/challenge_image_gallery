const ImageDetail = (props: any) => {

    // console.log(props)


    return (

        <div className="h-[100vh] w-[100vw] bg-white flex flex-row flex-wrap overflow-y-auto">
            <div className="hero place-items-end ">
                <img className="w-full shadow-md " src={props.data.img.urls.small} alt={props.data.img.alt_description} />
                <a className="m-2 btn btn-warning btn-xs" href={props.data.img.links.download}>Look image</a>
            </div>
            <div className="m-10">
                <h1 className="font-bold text-center uppercase ">{props.data.img.alt_description}</h1>
                <hr className="my-3" />
                <h3 className="text-sm">{props.data.img.alt_description}</h3>
                <h3 className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, molestias. Ducimus iste ea obcaecati accusantium eveniet est dicta incidunt illum ratione modi beatae tenetur id natus labore cumque, nemo numquam!</h3>
            </div>
        </div>
    );
}

export default ImageDetail;