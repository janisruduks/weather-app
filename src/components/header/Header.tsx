import "./styles.css";

import { AiFillCloseCircle } from "react-icons/ai";

import Link from "next/link";

const Header = () => {
    return (
        <div className="header-wrapper">
            <Link href="/">
                <p>Weather_App.exe</p>
            </Link>
            <Link href="/">
                <AiFillCloseCircle />
            </Link>
        </div>
    );
};

export default Header;
