import "../styles/buttons.css";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary"; // Define variantes em vez de booleanos
  isDisabled?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Nomeação diferente
  buttonType?: "button" | "submit" | "reset"; // Mantém os tipos padrão
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  isDisabled = false,
  handleClick,
  buttonType = "button", // Padrão permanece "button"
}) => {
  return (
    <button
      type={buttonType}
      className={`btn-${variant}`} // Usa um prefixo padrão para variantes
      disabled={isDisabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
