import React, { useEffect, useState } from 'react';
import AddCabin from '../features/cabins/AddCabin';
import CabinTable from '../features/cabins/CabinTable';

import Heading from '../ui/Heading';
import Row from '../ui/Row';



function Cabins() {

    // useEffect(() => {
    //     getCabins().then(data => console.log(data))
    // }, [])


    return (
        <>
            <Row type='horizontal'>
                <Heading as='h1' >All Cabins</Heading>
                <p>Filter / Sort</p>
            </Row>
            <Row>
                <CabinTable />
                <AddCabin />
            </Row>
        </>
    )
}

export default Cabins