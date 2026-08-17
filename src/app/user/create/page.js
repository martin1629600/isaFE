'use client';

import {Row, Col, Button} from "reactstrap";
import { useForm } from "react-hook-form";

export default function UserCreate() {
    const {
        register,
        watch,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode:'onSubmit',
    });
    console.log(watch())

    return (
        <>
        <Row className ='mb-3'>
             <Col md={6}>
                 <input type='text' className='form-control' placeholder='firstName' {...register('firstName', {
                     required: 'First Name is required',
                     maxLength: 50,
                     minLength: 3,
                 })} />
                 {errors && errors.firstName && (
                     <span className="text-danger">{errors.firstName.message}</span>
                 )}
             </Col>

        <Col md={6}>
            <input type='text' className='form-control' placeholder='lastName' {...register('lastName', {
                required: 'Last Name is required',
                maxLength: 50,
                minLength: 3,
            })} />
            {errors && errors.lastName && (
                <span className="text-danger">{errors.lastName.message}</span>
            )}
        </Col>
        <Col md={6}>
            <input type='text' className='form-control' placeholder='email' {...register('email', {
                required: 'Email is required',
                maxLength: 50,
                minLength: 3,
            })} />
            {errors && errors.email && (
                <span className="text-danger">{errors.email.message}</span>
            )}
        </Col>
        </Row>

            <Row>
                <Col md={"12"}>
                    <Button className="btn btn-primary" type="button" onClick={() => {
                        handleSubmit(async (data) => {
                            await post("/user/create-user-body", data)
                        })();
                    }}> Submit</Button>
                </Col>
            </Row>
        </>
    )
}