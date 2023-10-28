import React, { useEffect, useState } from 'react';
import CabinTable from '../features/cabins/CabinTable';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Row from '../ui/Row';



function Cabins() {

    // useEffect(() => {
    //     getCabins().then(data => console.log(data))
    // }, [])

    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Row type='horizontal'>
                <Heading as='h1' >All Cabins</Heading>
                <p>Filter / Sort</p>
            </Row>
            <Row>
                <CabinTable />

                <Button onClick={() => setShowForm(!showForm)} >Add new cabin</Button>
                {!showForm && <CreateCabinForm />}
            </Row>
        </>
    )
}

export default Cabins