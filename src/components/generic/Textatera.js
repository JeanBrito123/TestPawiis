import styled from 'styled-components';

const Textatera = styled.textarea`
    width: ${props => props.width};
    height: ${props => props.height || "25px"};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "10px"};
    background-color: ${props => props.bgC || "#FFF"};
    font-size: ${props => props.fontSize || "14px"};
    color: ${props => props.color || "gray"};
    position: ${props => props.position};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    outline: none;
    ::-webkit-input-placeholder { color: #BCBEBD; } /* WebKit */
    ::-moz-placeholder { color: #BCBEBD; } /* Firefox 19+ */
    resize: none;
    @media(max-width: 420px) {
        width: ${props => props.widthTele};
        margin: ${props => props.marginTele };
    }
`;

export default Textatera;