import { useModal } from "../hooks/useModal";
import ImageDetail from "./ImageDetail";
import Modal from "./Modal";

const Image = (props:any) => {

    const [active, OpenModal, CloseModal]:any = useModal(false);

    const handleModal = () => {OpenModal()}

    return ( 
        <>
        <a onClick={handleModal}>
            <img className="h-full py-2 object-cover rounded-3xl px-1 hover:drop-shadow-2xl" src={props.img.urls.small} alt={props.img.alt_description} />
        </a>
        <Modal active={active} closeModal={CloseModal}>
            <ImageDetail data={props}/>
        </Modal>
        </>
     );
}

export default Image;