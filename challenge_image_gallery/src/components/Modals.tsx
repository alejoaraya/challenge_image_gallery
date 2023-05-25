import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

const Modals = () => {
    const [active, OpenModal, CloseModal] = useModal(false);

    return (
    <>
        <h1>Modales</h1>
        <button onClick={OpenModal}>Modal 1</button>
        <Modal active={active} closeModal={CloseModal}>
            <h1>Modal</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic enim voluptates, dolores ducimus odit porro dicta aperiam autem et, consectetur obcaecati. Ratione ab molestiae nesciunt accusantium error voluptate reiciendis.
            Eaque, molestiae! Veritatis quam omnis minima exercitationem esse itaque, ut tempore rem quo reprehenderit vel, voluptatem et sed blanditiis obcaecati, a reiciendis tempora dolorem molestiae. Corporis vel modi doloremque! Vitae?
            Eos inventore beatae enim perferendis cum. Necessitatibus facilis consectetur animi cupiditate omnis est cumque amet eligendi saepe ipsam quaerat ratione praesentium eos placeat cum vero, qui repellat architecto illum eaque..</p>
        </Modal>
        </>);
}

export default Modals;