import { ReactNode } from "react";
import styles from './Button.module.css';

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    onClick?: () => void;
}

function Button({ children, isLoading, onClick }: Props) {
    const className = [`btn btn-${isLoading ? "secondary" : 'primary'}`, styles.button, styles.padded].join(' ')

    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            type="button"
            className={className}
        >
            {isLoading ? 'Cargando...' : children}
        </button>
    )
}

export default Button
