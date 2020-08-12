import styled from 'styled-components';

const InputText = styled.input`
    width: ${props => props.width};
    height: ${props => props.height || "25px"};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    background-color: ${props => props.bgC || "#FFF"};
    font-size: ${props => props.fontSize || "14px"};
    color: ${props => props.color || "gray"};
    position: ${props => props.position};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    outline: none;
    ::-webkit-input-placeholder { color: #BCBEBD; } /* WebKit */
    ::-moz-placeholder { color: #BCBEBD; } /* Firefox 19+ */
    ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
    }
    @media(max-width: 420px) {
        width: ${props => props.widthTele};
    }
`;

export default InputText;