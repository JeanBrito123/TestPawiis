import React from 'react';
import Container from '../generic/Container';
import Title from '../generic/Title';
import InputText from '../generic/InputText';
import ChangePhoto from './ChangePhoto';

const FormPrincipal = (props) => {
    return (
    <Container 
        display="grid"
        gridColumns="30% 70%"
        justifyItems="center"
        padding="7px 0px"
        widthTele="350px"
        >
        <ChangePhoto />
        <Container 
            display="grid"
            gridColumns="30% 70%"
            alignItems="center"
            >
            <Title
                fontSize="13px"
                fontWeight="600"
                color="#526a92"
                >
                    Nombre
            </Title>
            <InputText
                width="80%"
                widthTele="80%"
                type="text" 
                placeholder=" Nombre"
                padding="0 0 0 10px"
                border="1px solid #637798"
                borderRadius="20px"
                onChange={(e)=> props.handleOnChange(e, "name")}
                />
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                    >
                    Nombre comercial
            </Title>
            <InputText
                width="80%"
                widthTele="80%"
                type="text" 
                placeholder=" Nombre Comercial"
                padding="0 0 0 10px"
                border="1px solid #637798"
                borderRadius="20px"
                onChange={(e)=> props.handleOnChange(e, "nameComercial")}
                />
            </Container>
        </Container>
    );
}

export default FormPrincipal;