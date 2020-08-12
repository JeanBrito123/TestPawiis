import React from 'react';
import Container from '../generic/Container';
import Title from '../generic/Title';
import DehazeIcon from '@material-ui/icons/Dehaze';

const Headers = (props) => {
    return (
        <Container 
            display="grid"
            gridColumns="80% 20%"
            alignItems="center"
            height="50px"
            bgC="#efa707"
            >
                <Title 
                    fontSize="30px"
                    fontWeight="800"
                    margin="0 0 0 20px"
                    color="#252e3f"
                    >
                        {props.name}
                </Title>
                <Title 
                    color="#252e3f"
                        >
                        <DehazeIcon style={{ fontSize: 40 }}/>
                </Title>
        </Container>
    );
}

export default Headers;

