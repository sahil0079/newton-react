import React, { useState } from 'react'
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';

import { styled } from 'styled-components';
import { formatCurrency } from '../../utils/helpers'

import CreateCabinForm from './CreateCabinForm';
import { useCreateCabin } from './useCreateCabin';
import { useDeleteCabin } from './useDeleteCabin';

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;
    padding: 1.4rem 2.4rem;

    &:not(:last-child){
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const Img = styled.img`
    display:block;
    width: 6.4rem;
    aspect-ratio: 3/2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: 'Sono';
`;

const Price = styled.div`
    font-weight: 600;
    font-family: 'Sono';
`;

const Discount = styled.div`
    font-weight: 500;
    font-family: 'Sono';
    color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
    const [showForm, setShowForm] = useState(false);
    const { id: cabinId, name, maxCapacity, regularPrice, discount, image } = cabin;

    const { isDeleting, deleteCabin } = useDeleteCabin();
    const { isCreating, createCabin } = useCreateCabin();

    function handleDuplicate() {
        createCabin({
            name: `Copy of ${name}`
            , maxCapacity, regularPrice, discount, image
        })
    };

    return (
        <>

            <TableRow role='row'>

                <Img src={image} />
                <Cabin>{name}</Cabin>
                <div>Fits up to {maxCapacity} guests </div>
                <Price> {formatCurrency(regularPrice)} </Price>
                <Discount> {formatCurrency(discount)}</Discount>
                <div>
                    <button disabled={isCreating} onClick={handleDuplicate}><HiSquare2Stack /></button>
                    <button disabled={isDeleting} onClick={() => setShowForm((show) => !show)} ><HiPencil /> </button>

                    <button disabled={isDeleting} onClick={() => deleteCabin(cabinId)} ><HiTrash /></button>

                </div>

            </TableRow>

            {showForm && <CreateCabinForm cabinToEdit={cabin} />}



        </>
    )
}

export default CabinRow