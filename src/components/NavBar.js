import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav>
            <ul className="ul-style">
                <li className="li-style"><a href="/">Home</a></li>
                <li className="li-style" ><a href="/about">Tienda</a></li>
                <li className="li-style" ><a href="/contact"><CartWidget /></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;