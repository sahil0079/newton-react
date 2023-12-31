
import { useForm } from 'react-hook-form';

import { useCreateCabin } from './useCreateCabin';
import { useEditCabin } from './useEditCabin';

import React from 'react'
import Button from '../../ui/Button'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import FileInput from '../../ui/FileInput';
import Form from '../../ui/Form';




function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {

    const { id: editId, ...editValues } = cabinToEdit;

    const isEditSession = Boolean(editId);


    const { register, handleSubmit, reset, getValues, formState } = useForm({
        defaultValues: isEditSession ? editValues : {}
    });

    const { errors } = formState;

    // console.log('errors', errors)

    const { createCabin, isCreating } = useCreateCabin();

    const { editCabin, isEditing } = useEditCabin();


    function onSubmit(data) {
        // console.log('data', data.image[0])
        // mutate(data);
        const image = typeof data.image === 'string' ? data.image : data.image[0];

        if (isEditSession) editCabin({ newCabinData: { ...data, image }, id: editId }, {
            onSuccess: (data) => {
                // reset();
                onCloseModal?.();
            }
        })
        else createCabin({ ...data, image: image }, {
            onSuccess: (data) => {
                // reset();
                onCloseModal?.();
            }
        })

    }

    const isWorking = isCreating || isEditing;
    return (
        <Form onSubmit={handleSubmit(onSubmit)} type={onCloseModal ? 'modal' : 'regular'} >
            <FormRow label='Cabin name' error={errors?.name?.message} >
                <Input type='text' id='name' disabled={isWorking} {...register('name', {
                    required: 'This field is required'
                })} />
            </FormRow>

            <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message} >
                <Input type='number' id='maxCapacity' disabled={isWorking} {...register('maxCapacity', {
                    required: 'This field is required',
                    min: {
                        value: 1,
                        message: 'Capacity should be atleast 1'
                    }
                })} />
            </FormRow>

            <FormRow label='Regular price' error={errors?.regularPrice?.message} >
                <Input type='number' id='regularPrice' disabled={isWorking} {...register('regularPrice', {
                    required: 'This field is required',
                    min: {
                        value: 1,
                        message: 'Price should be atleast 1'
                    }
                })} />
            </FormRow>


            <FormRow label='Discount' error={errors?.discount?.message} >
                <Input type='number' id='discount' disabled={isWorking} defaultValue={0} {...register('discount', {
                    required: 'This field is required',
                    validate: (value) => value <= getValues().regularPrice || "Discount should be less than regular price"
                })} />
            </FormRow>

            <FormRow label='Description' error={errors?.description?.message} >
                <textarea type='text' id='description' disabled={isWorking} {...register('description', {
                    required: 'This field is required'
                })} />
            </FormRow>

            <FormRow label='Cabin Photo' >
                <FileInput id='image' accept='image/*' {...register('image', {
                    required: isEditSession ? false : 'This field is required'
                })} />
                {/* <input type='file' id='image' accept='image/*' /> */}
            </FormRow>

            <FormRow>
                <Button
                    onClick={() => onCloseModal?.()}
                    variation='secondary'
                    type='reset'
                >Cancel</Button>
                <Button disabled={isWorking} >{isEditSession ? 'Edit Cabin' : 'Create New Cabin'}</Button>

            </FormRow>

        </Form >
    )
}

export default CreateCabinForm