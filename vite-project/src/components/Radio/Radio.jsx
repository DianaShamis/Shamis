import PropTypes from "prop-types";

const Radio = ({ children, checked, onChange }) => {
    return (
        <label className="label">
            <input
                type="radio"
                name="mode"
                className="radio"
                checked={checked}
                onChange={() => onChange(String(children).trim())} // Преобразуем в строку
            />
            {children}
        </label>
    );
};

Radio.propTypes = {
    checked: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Radio;
