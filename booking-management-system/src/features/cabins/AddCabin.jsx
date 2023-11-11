
import React, { useState } from 'react'
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';

function AddCabin() {

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <div>

            <Button onClick={() => setIsOpenModal(!isOpenModal)} >Add new cabin</Button>
            {/* {isOpenModal && <CreateCabinForm />} */}
            {isOpenModal && <Modal onClose={() => setIsOpenModal(false)} ><CreateCabinForm onCloseModal={() => setIsOpenModal(false)} /></Modal>}

        </div>
    )
}

export default AddCabin