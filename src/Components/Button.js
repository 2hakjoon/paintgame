import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
    border: 0;
    height: 35px;
    font-size: 12px;
    padding:0px 15px;
`;

const Button = ({text, onClick,className}) => (
    <Container onClick={onClick} className={className}>
        {text}
    </Container>
);

Button.propTypes = {
    text : PropTypes.string.isRequired
}

export default Button;
