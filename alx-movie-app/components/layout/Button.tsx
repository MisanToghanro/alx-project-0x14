import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({title, action}) => {

    return(
        <button onClick={action}>
          {title}
        </button>
    )
}

export default Button;