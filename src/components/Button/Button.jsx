import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Button({ className, onClick, style, label, type, ...props }) {
  const btnClass = classNames(
    "rounded-2xl w-full p-4 font-bold text-lg outline-none transform transition duration-200 hover:scale-105",
    {
      [`bg-primary text-white hover:bg-primary-dark`]: style === "primary",
      [`bg-secondary text-primary hover:bg-secondary-dark hover:text-primary-dark`]:
        style === "secondary",
    },
    className
  );

  return (
    <button className={btnClass} onClick={onClick} {...props}>
      {label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  style: "primary",
  type: "button",
  onClick: () => {},
};

export default Button;
