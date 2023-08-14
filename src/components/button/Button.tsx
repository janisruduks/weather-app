import "./styles.css";

import { ButtonProps } from "@/types";

const Button = ({ children, type, onClick, customClass }: ButtonProps) => {
    return (
        <div>
            <button
                className={
                    (type === "primary" ? "primary" : "secondary") +
                    " button-content-wrapper " +
                    customClass
                }
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
