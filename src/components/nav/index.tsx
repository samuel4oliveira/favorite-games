import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./nav.css";

const Nav: React.FC = () => {
    const [scrolled, setScrolled] = useState("");
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setScrolled("scrolled");
            } else {
                setScrolled("");
            }
        });
    }, []);

    return (
        <nav className={scrolled}>
            <ul>
                <li>
                    <Link to="ninth" className={"home"} smooth={true}>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to="ninth" smooth={true}>
                        NINTH
                    </Link>
                </li>
                <li>
                    <Link to="eighth" smooth={true}>
                        EIGHTH
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
