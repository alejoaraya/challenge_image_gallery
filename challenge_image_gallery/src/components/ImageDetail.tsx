const ImageDetail = (props: any) => {

    return (
        <>
            <div className=" flex flex-col lg:flex-row overflow-auto">
                <div className=" sm:h-[100%] flex justify-center">
                    <img className="rounded-2xl" src={props.data.img.urls.small} alt={props.data.img.alt_description} />
                </div>
                <div className="w-full">
                    <h1 className="text-3xl pt-7 pb-4 px-8">{props.data.img.alt_description}</h1>
                    <hr />
                    <h3 className="text-xl py-4 px-8">{props.data.img.alt_description}</h3>
                </div>
            </div>

        </>
    );
}

export default ImageDetail;