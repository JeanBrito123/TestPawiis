import styled from 'styled-components';

const Title = styled.div`
    display: ${props => props.display};
    max-width: ${props => props.maxWidth};
    width: ${props => props.width || "100%"};
    height: ${props => props.height};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    background-color: ${props => props.bgC};
    font-size: ${props => props.fontSize || "14px"};
    font-weight: ${props => props.fontWeight || "600"};
    color: ${props => props.color};
    justify-items: ${props => props.justifyItems};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    position: ${props => props.position};
    border-bottom: ${props => props.borderT};
`;

export default Title;