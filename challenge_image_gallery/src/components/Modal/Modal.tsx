// import './Modal.css'

const Modal = ({ children, active, closeModal }) => {
    return (
        <article onClick={closeModal} className={`${(!active && 'hidden')} flex fixed  z-10 top-0 left-0 w-full min-h-full bg-black/[.75] justify-center items-center`}>
            <div className='relative w-[95%] h-[60%] top-0 bg-white rounded-3xl xl:w-[65%]'>
                <div className=" absolute h-[30px] w-[30px] bg-gray-200 rounded-3xl top-1 right-5">
                    <button className='font-bold  absolute right-2 top-1 text-black' onClick={closeModal}>X</button>
                </div>
                {children}
            </div>
        </article>
    );
}

export default Modal;