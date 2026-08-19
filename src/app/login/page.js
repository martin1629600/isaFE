'use client';

import {Row, Col, Button, Card, CardBody} from "reactstrap";
import {useForm} from "react-hook-form";
import {Axios} from "../../core/httpClient";
import {useRouter} from "next/navigation";

export default function Login() {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'onSubmit',
    });

    return (
        <Row className="justify-content-center mt-5">
            <Col md={5} lg={4}>

                <Card className="shadow">
                    <CardBody className="p-4">

                        <h2 className="text-center mb-4">
                            Login
                        </h2>

                        {/* EMAIL */}
                        <div className="mb-3">
                            <label className="form-label">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                            />

                            {errors.email && (
                                <span className="text-danger">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div className="mb-4">
                            <label className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />

                            {errors.password && (
                                <span className="text-danger">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        {/* LOGIN BUTTON */}
                        <Button
                            color="primary"
                            className="w-100"
                            type="button"
                            onClick={() => {
                                handleSubmit(async (data) => {

                                    const result = await Axios.post(
                                        "/auth/login",
                                        data
                                    );

                                    localStorage.setItem(
                                        "token",
                                        result.data
                                    );
                                    window.location.href = "/";

                                })();
                            }}
                        >
                            Login
                        </Button>

                    </CardBody>
                </Card>

            </Col>
        </Row>
    );
}