
const Modal = ({ children, active, closeModal }) => {
    return (
        <>
            <article className={`${(!active && 'hidden')} flex fixed  z-10 top-0 left-0 w-full min-h-full bg-black/[.75] justify-center items-center`}>
                <div className='relative top-0 '>
                    <button onClick={closeModal} className="absolute btn btn-sm btn-circle right-2 top-2">✕</button>   
                    {children}
                </div>
            </article>
        </>
    );
}

export default Modal;