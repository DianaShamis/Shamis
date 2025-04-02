import PropTypes from "prop-types";
import "./Button.css";
import { useState } from "react";

const NewButton = ({ children, title, mode = "Инкремент" }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + (mode === "Инкремент" ? 1 : -1));
    };

    return (
        <button 
            title={title} 
            className="button" 
            onClick={handleClick}
        >
            {children}: {count}
        </button>
    );
};

NewButton.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    mode: PropTypes.oneOf(["Инкремент", "Декремент"]),
};

export default NewButton;
