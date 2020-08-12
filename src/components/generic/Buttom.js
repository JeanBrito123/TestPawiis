import React from 'react';
import styled from 'styled-components';
// import { Link } from "react-router-dom";

const Button = props => (
  <ButtonDiv
    onClick={props.onClick}
    width={props.width}
    widthTele={props.widthTele}
    marginTop={props.marginTop}
    margin={props.margin}
  >
    <ButtonB heightButton={props.heightButton}>{props.text}</ButtonB>
  </ButtonDiv>
);

const ButtonDiv = styled.div`
  height: auto;
  width: ${props => props.width};
  cursor: pointer;
  margin-top: ${props => props.marginTop};
  margin: ${props => props.margin};
  @media (max-width: 550px) {
    width: ${props => props.widthTele};
  };
  @media (max-width: 380px) {
    width: ${props => props.widthTele || '90%'};
  }
`;
const ButtonB = styled.button`
  border-radius: 30px;
  color: #FFFFFF;
  background: #e30a63;
  opacity: 1;
  border: 1px solid #e30a63;
  font-size: 15px;
  width: 100%;
  height: ${props => props.heightButton || '35px'};
  margin-top: ${props => props.marginTop};
  outline: none;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: inherit;
  text-overflow: ellipsis;
  cursor: pointer;
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
  @media (max-width: 380px) {
    font-size: 13px;
    height: 32px;
  };
  :hover {
    background-color: #e30a63;
    color: #fff;
  };
`;

export default Button;
