import { useState } from 'react';


export const useModal = (initialValue = false) => {
    
    const [active, setActive] = useState(initialValue)

    const OpenModal = () => setActive(true)
    const CloseModal = () => setActive(false)

    return [active, OpenModal, CloseModal]
}