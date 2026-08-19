import Link from "next/link";

export default function Header() {
    return(
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <h1>Vinyl rental store</h1>
                </Link>


                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link href="/login" className="me-3 py-2 text-dark text-decoration-none">Login</Link>
                </nav>
            </div>
        </header>
    )
}