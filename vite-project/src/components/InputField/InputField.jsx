import PropTypes from "prop-types";

const InputField = ({ value, onChange }) => {
    return (
        <input 
            type="text" 
            value={value}
            onChange={onChange}
        />
    );
};

InputField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputField;