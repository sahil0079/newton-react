

import React from 'react'
import Button from '../../ui/Button'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'

function CreateCabinForm() {
    return (
        <form>
            <FormRow label='Cabin name' >
                <Input type='text' id='name' />
            </FormRow>

            <FormRow label='Maximum capacity' >
                <Input type='number' id='maxCapacity' />
            </FormRow>

            <FormRow label='Regular price' >
                <Input type='number' id='regularPrice' />
            </FormRow>


            <FormRow label='Discount' >
                <Input type='number' id='discount' defaultValue={0} />
            </FormRow>

            <FormRow label='Description' >
                <textarea type='text' id='description' />
            </FormRow>

            <FormRow label='Cabin Photo' >
                <input type='fle' id='image' accept='image/*' />
            </FormRow>

            <FormRow>
                <Button variation='secondary' type='reset' >Cancel</Button>
                <Button>Add Cabin</Button>

            </FormRow>




        </form>
    )
}

export default CreateCabinForm