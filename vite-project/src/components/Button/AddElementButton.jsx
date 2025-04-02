import PropTypes from "prop-types";
import "./Button.css";

const AddElementButton = ({ children, title, onClick, disabled }) => {
    return (
        <button 
            title={title}
            onClick={onClick}
            disabled={disabled}
            className="button"
        >
            {children}
        </button>
    );
};

AddElementButton.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

export default AddElementButton;