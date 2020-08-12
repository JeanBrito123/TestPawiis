import React from 'react';
import styled from 'styled-components';
import Container from '../generic/Container';
import Title from '../generic/Title';
import InputText from '../generic/InputText';
import SelectText from '../generic/SelectText';
import Textatera from '../generic/Textatera';
import AddIcon from '@material-ui/icons/Add';
import Redes from './Redes';

const FormSecondary = (props) => {
    const años = [
        1,
        2,
        3
    ];
    const Experiencia = [
        "nivel 1",
        "nivel 2",
        "nivel 3"
    ];
    const Especialidad = [
        "Cirujía.",
        "Fisioterapia.",
        "Imagenología (diagnóstico por imagen)",
        "Oncología.",
        "Rehabilitación.",
    ];
    const redes = [
        "/assets/image/instagram.png",
        "/assets/image/facebook.png",
        "/assets/image/linkedin.png",
    ];
    const cargarDocumentos = (e) => {
        if(e === "input1"){
            document.getElementById("document1").click()
        }else{
            document.getElementById("document2").click()
        }
    }
    return (
        <Container 
            display="grid" 
            justifyItems="center" 
            widthTele="90%"
            >
            <Container
                width="90%"
                display="grid"
                gridColumns="40% 60%"
                gridGrap="30px"
                margin="10px 0"
            >
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                    margin=" 0 10px 0 0"
                >
                    Teléfono
                </Title>
                <InputText
                    type="number"
                    width="87%"
                    placeholder=" Número"
                    padding="0 10px 0 10px"
                    border="1px solid #637798"
                    borderRadius="20px"
                    color="gray"
                    onChange={(e)=> props.handleOnChange(e, "telefono")}
                />
            </Container>
            <Container
                width="90%"
                display="grid"
                gridColumns="40% 60%"
                gridGrap="30px"
                margin="10px 0"
            >
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                    margin=" 0 10px 0 0"
                >
                    Experiencia
                </Title>
                <SelectText 
                    data={Experiencia} 
                    width="98%" 
                    marginSpan="-28px 0 0 150px" 
                    marginSpanTele="-28px 0 0 140px" 
                    experiencia={props.experiencia}
                    onChange={(e)=> props.handleOnChange(e, "experiencia")}
                    />
            </Container>
            <Container
                width="90%"
                display="grid"
                gridColumns="40% 60%"
                gridGrap="30px"
                margin="10px 0"
            >
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                >
                    Especialidad
            </Title>
                <SelectText 
                    data={Especialidad} 
                    width="98%" 
                    marginSpan="-28px 0 0 150px" 
                    marginSpanTele="-28px 0 0 140px" 
                    onChange={(e)=> props.handleOnChange(e, "especialidad")}
                    />
            </Container>
            <Container
                width="90%"
                display="grid"
                gridColumns="40% 60%"
                gridGrap="30px"
                margin="10px 0"
            >
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                >
                    Años Experiencia
            </Title>
                <SelectText 
                    data={años} 
                    width="40%" 
                    marginSpan="-28px 0 0 38px" 
                    onChange={(e)=> props.handleOnChange(e, "anosExperiencias")}
                    />
            </Container>
            <Container
                width="90%"
                display="grid"
                gridColumns="40% 60%"
                gridGrap="30px"
                margin="10px 0"
            >
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                    margin=" 0 10px 0 0"
                >
                    Bio / Resumen
                </Title>
                <Textatera
                    type="text"
                    width="85%"
                    fontSize="16px"
                    height="40px"
                    placeholder=" Descripción"
                    padding="10px"
                    border="1px solid #637798"
                    borderRadius="20px"
                    onChange={(e)=> props.handleOnChange(e, "descripcion")}
                />
            </Container>
            <Container
                width="90%"
                display="grid"
                gridColumns="35% 66%"
                gridGrap="50px"
                margin="10px 0"
            >
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                    margin=" 0 10px 0 0"
                >
                    Conectar Perfiles Profesionales
                </Title>
                <Redes 
                    image={redes} 
                    onChange={(e)=> props.handleOnChange(e, "redes")}
                    />
            </Container>
            <Container
                width="90%"
                display="grid"
                gridColumns="40% 60%"
                gridGrap="30px"
                margin="10px 0"
            >
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                >
                    ¿Estas Colegiado?
            </Title>
            <div style={{display:"flex"}}>
                <SelectText 
                    data={["Si", "No"]} 
                    width="60px"   
                    marginSpan="-28px 0 0 32px" 
                    onChange={(e)=> props.handleOnChange(e, "colegiadoSelect")}
                    />
                <InputText
                    type="number"
                    width="45%"
                    widthTele="80%"
                    placeholder=" Número"
                    padding="0 10px 0 10px"
                    margin="0 0 0 10px"
                    border="1px solid #637798"
                    borderRadius="20px"
                    color="gray"
                    onChange={(e)=> props.handleOnChange(e, "colegiadoInput")}
                />
            </div>
            </Container>
            <Container
                width="90%"
                display="grid"
                gridColumns="40% 60%"
                gridGrap="30px"
                margin="10px 0"
            >
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                >
                    Certificado titulo Universitario
            </Title>
                <InputText
                    type="text"
                    width="50%"
                    disabled={true}
                    value={props.titleU}
                    placeholder="Ajuntar"
                    padding="0 10px 0 10px"
                    border="1px solid #637798"
                    borderRadius="20px"
                    color="#f1f1f1"
                    onClick={() => cargarDocumentos()}
                />
                <CompSpan
                    style={{
                        backgroundColor: "#11487d",
                        width: "25px",
                        height: "20px",
                        borderRadius: "40%",
                        textAlign: "center"
                    }}
                    marginSpan="4px 0 0 230px"
                    marginTele="4px 0 0 220px"
                    onClick={() => cargarDocumentos("input1")}
                >
                    <AddIcon style={{ fontSize: 20, color: "#FFF" }} />
                </CompSpan>
                <InputText
                    type="file"
                    id="document1"
                    accept="application/pdf/png/jpg/svg/jpeg"
                    onChange={e => props.handleTitleUniversitary(e.target)}
                    style={{ display: "none" }}
                />
            </Container>
            <Container
                width="90%"
                display="grid"
                gridColumns="40% 60%"
                gridGrap="30px"
                margin="10px 0"
            >
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                >
                    Certificado inicio Actividades
            </Title>
                <InputText
                    type="text"
                    disabled={true}
                    value={props.homeA}
                    width="50%"
                    placeholder="Ajuntar"
                    padding="0 10px 0 10px"
                    border="1px solid #637798"
                    borderRadius="20px"
                    color="#f1f1f1"
                />
                <CompSpan
                    style={{
                        backgroundColor: "#11487d",
                        width: "25px",
                        height: "20px",
                        borderRadius: "40%",
                        textAlign: "center"
                    }}
                    marginSpan="4px 0 0 230px"
                    marginTele="4px 0 0 220px"
                    onClick={() => cargarDocumentos("input2")}
                >
                    <AddIcon style={{ fontSize: 20, color: "#FFF" }} />
                </CompSpan>
                <InputText
                    type="file"
                    id="document2"
                    accept="application/pdf/png/jpg/svg/jpeg"
                    onChange={e => props.handleHomeActivities(e.target)}
                    style={{ display: "none" }}
                />
            </Container>
            <Container
                width="90%"
                display="grid"
                gridColumns="40% 60%"
                gridGrap="30px"
                margin="10px 0"
            >
                <Title
                    fontSize="13px"
                    fontWeight="600"
                    color="#526a92"
                    margin=" 0 10px 0 0"
                >
                    RUT
                </Title>
                <InputText
                    type="number"
                    width="50%"
                    placeholder=" Número"
                    padding="0 10px 0 10px"
                    border="1px solid #637798"
                    borderRadius="20px"
                    color="gray"
                    onChange={(e)=> props.handleOnChange(e, "rut")}
                />
            </Container>
        </Container>
    );
};

const CompSpan = styled.span `
    margin: ${props => props.marginSpan};
    @media(max-width: 420px) {
        width: ${props => props.widthTele};
        margin: ${props => props.marginTele};
    }
`;
export default FormSecondary;