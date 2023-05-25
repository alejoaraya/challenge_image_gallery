// import './Modal.css'

const Modal = ({children,active, closeModal}) => {
    return (  
        <article className={`${(!active && 'hidden')} flex fixed  z-10 top-0 left-0 w-full min-h-full bg-black/[.75] justify-center items-center`}>
        <div className='relative w-[60%] h-[60%] bg-white rounded-3xl'>
            <button className='absolute top-1 right-5 text-2xl' onClick={closeModal}>X</button>
            {children}
        </div>
        </article>
    );
}

export default Modal;