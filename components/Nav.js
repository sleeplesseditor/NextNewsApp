import Link from "next/link";

const Nav = () => (
    <div className="nav-bar">
        <img className="nav-bar-image" src="/static/next-js-logo.png" alt="logo" height="50" />
        <Link href="/">
            <a className="nav-bar-link">Next News</a>
        </Link>
    </div>
);

export default Nav;