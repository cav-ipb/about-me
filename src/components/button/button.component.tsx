import React, { CSSProperties } from "react";
import "./button.component.scss";

interface ButtonComponentProps {
    label: string;
    color: "primary" | "secondary";
    style?: CSSProperties;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({label, color, style}) => {
    return (
        <button 
            className="app-button"
            style={{backgroundColor: `var(--app-${color}-color)`, borderColor: `var(--app-${color}-color)`, ...style}}>{label}
        </button>
    )
}

export default ButtonComponent;