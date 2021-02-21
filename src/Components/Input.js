import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`

    border:1px solid gray;
    border-radius : 10px;
    height: 35px;
    font-size: 12px;
    padding:0px 15px;
`;

const Input = ({ placeholder, required = true, value, onChange, type="text",className}) => (
    <Container
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    className={className}
    />
);

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    className: PropTypes.string
}

export default Input;
