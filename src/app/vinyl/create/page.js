'use client';

import {Row, Col, Button} from "reactstrap";
import {useForm} from "react-hook-form";
import {Axios} from "../../../core/httpClient";

export default function VinylCreate() {
    const {
        register,
        watch,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'onSubmit',
    });

    console.log(watch());

    return (
        <>
            <Row className='mb-3'>

                <Col md={6}>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Title'
                        {...register('title', {
                            required: 'Title is required',
                            maxLength: 100,
                            minLength: 2,
                        })}
                    />

                    {errors && errors.title && (
                        <span className="text-danger">
                            {errors.title.message}
                        </span>
                    )}
                </Col>

                <Col md={6}>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='Release Year'
                        {...register('releaseYear', {
                            required: 'Release Year is required',
                        })}
                    />

                    {errors && errors.releaseYear && (
                        <span className="text-danger">
                            {errors.releaseYear.message}
                        </span>
                    )}
                </Col>

                <Col md={6}>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='User ID'
                        {...register('userId', {
                            required: 'User ID is required',
                        })}
                    />

                    {errors && errors.userId && (
                        <span className="text-danger">
                            {errors.userId.message}
                        </span>
                    )}
                </Col>

                <Col md={6}>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='Artist ID'
                        {...register('artistId', {
                            required: 'Artist ID is required',
                        })}
                    />

                    {errors && errors.artistId && (
                        <span className="text-danger">
                            {errors.artistId.message}
                        </span>
                    )}
                </Col>

                <Col md={6}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Genre IDs, e.g. 1,2,3"
                        {...register("genreIds", {
                            required: "Genre IDs are required"
                        })}
                    />

                    {errors && errors.genreIds && (
                        <span className="text-danger">
                        {errors.genreIds.message}
                        </span>
                    )}
                </Col>

            </Row>

            <Row>
                <Col md={"12"}>
                    <Button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => {
                            handleSubmit(async (data) => {

                                const vinyl = {
                                    title: data.title,
                                    releaseYear: Number(data.releaseYear),
                                    userId: Number(data.userId),
                                    artistId: Number(data.artistId),
                                    genreIds: data.genreIds
                                        .split(",")
                                        .map(id => Number(id.trim())),
                                    available: data.available || null,
                                    rentedUntil: data.rentedUntil || null
                                };

                                await Axios.post("/vinyl/create", vinyl);

                            })();
                        }}
                    >
                        Submit
                    </Button>
                </Col>
            </Row>
        </>
    );
}