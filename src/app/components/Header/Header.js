'use client';

import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function Header() {

    const [loggedIn, setLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setLoggedIn(!!token);
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
        window.location.href = "/login";
    };

    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">

                <Link
                    href="/"
                    className="d-flex align-items-center text-dark text-decoration-none"
                >
                    <h1>Vinyl rental store</h1>
                </Link>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">

                    {loggedIn ? (
                        <button
                            className="btn btn-link me-3 py-2 text-dark text-decoration-none"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="me-3 py-2 text-dark text-decoration-none"
                        >
                            Login
                        </Link>
                    )}

                </nav>

            </div>
        </header>
    );
}