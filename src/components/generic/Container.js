import styled from 'styled-components';

const Container = styled.div`
    display: ${props => props.display};
    max-width: ${props => props.maxWidth};
    width: ${props => props.width || "100%"};
    height: ${props => props.height};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    background-color: ${props => props.bgC};
    grid-template-columns: ${props => props.gridColumns};
    grid-gap: ${props => props.gridGrap};
    justify-items: ${props => props.justifyItems};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    position: ${props => props.position};
    border-radius: ${props => props.borderRadius};
    border-bottom: ${props => props.borderT};
    @media (max-width: 450px) {
        max-width:${props => props.maxWidthSm};
        width: ${props => props.widthSm};
        justify-content: ${props => props.justifyContentSm};
    }
    @media (max-width: 420px) {
        max-width:${props => props.maxWidthTele};
        width: ${props => props.widthTele};
        justify-content: ${props => props.justifyContentTele};
        justify-items: ${props => props.justifyItemsTele};
    }
`;

export default Container;