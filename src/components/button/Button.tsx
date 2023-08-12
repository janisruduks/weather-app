import "./styles.css";

type ButtonProps = {
  children?: React.ReactNode;
  type?: "primary" | "regular";
  onClick?: () => void;
  customClass?: string;
};

const Button = ({ children, type, onClick, customClass }: ButtonProps) => {
  return (
    <div>
      <button
        className={
          (type === "primary" ? "primary" : "secondary") + " " + customClass
        }
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
