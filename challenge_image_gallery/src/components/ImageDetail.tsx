const ImageDetail = (props: any) => {

    return (
        <div className="flex items-center justify-center">
            <div className="p-2 rounded-none shadow-xl modal-box ">
                <button className="sticky top-0 left-full btn btn-neutral btn-sm btn-circle ">✕</button>
                <figure><img src={props.data.img.urls.small} alt={props.data.img.alt_description} /></figure>
                <div className="card-body">
                    <h1 className="card-title">{props.data.img.alt_description}</h1>
                    <hr className="my-2" />
                    <h3>{props.data.img.alt_description}</h3>
                </div>
            </div>
        </div>
    );
}

export default ImageDetail;