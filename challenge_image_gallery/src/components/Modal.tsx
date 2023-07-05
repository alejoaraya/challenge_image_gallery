
const Modal = ({ children, active, closeModal }) => {
    return (
        <article onClick={closeModal} className={`${(!active && 'hidden')} flex fixed  z-10 top-0 left-0 w-full min-h-full bg-black/[.75] justify-center items-center`}>
            <div className='relative top-0 '>
                {children}
            </div>
        </article>
    );
}

export default Modal;