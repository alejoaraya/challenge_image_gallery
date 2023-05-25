const Image = (props:any) => {
    return ( 
        <>
        <a href={props.img.urls.regular}>
            <img className=" h-full py-2 object-cover rounded-3xl px-1" src={props.img.urls.small} alt={props.img.alt_description} />
        </a>
        </>
     );
}

export default Image;