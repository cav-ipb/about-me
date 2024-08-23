import React, { CSSProperties } from "react";
import "./button.component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

interface ButtonComponentProps {
    label: string;
    color: "primary" | "secondary";
    style?: CSSProperties;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({label, color, style}) => {
    return (
        <button 
            className="app-button"
            style={{backgroundColor: `var(--app-${color}-color)`, borderColor: `var(--app-${color}-color)`, ...style}}>
                <FontAwesomeIcon icon={faPaperPlane} style={{paddingRight:"5px"}}></FontAwesomeIcon>
                {label}
        </button>
    )
}

export default ButtonComponent;