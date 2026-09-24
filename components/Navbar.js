import Link from "next/link";

export default function Navbar() {
    return (
    <nav className="navbar">

        <div className="logo">
        <Link href="/">FITLOG</Link>
        </div>

        <div className="nav-links">
        <Link href="/">Workout</Link>
        <Link href="/my-plan">My Plan</Link>
        </div>

        <div className="nav-badges">

        <Link href="/my-plan" className="badge plan-badge">
            Plan 0
        </Link>

        <Link href="/my-plan" className="badge saved-badge">
            Saved 0
        </Link>

        </div>

    </nav>
    );
}