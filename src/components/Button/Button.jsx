import React from "react";
import PropTypes from "prop-types";

function Button({ className, onClick, style, label, ...props }) {
  return (
    <button className={`${className}`} onClick={onClick} {...props}>
      {label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  style: {},
  onClick: () => {},
};

export default Button;
