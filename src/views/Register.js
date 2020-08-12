import React, {useState} from 'react';
import Container from '../components/generic/Container';
import Title from '../components/generic/Title';
import Buttom from '../components/generic/Buttom';
import Headers from '../components/headers/Headers';
import FormPrincipal from '../components/register/FormPrincipal';
import FormSecondary from '../components/register/FormSecondary';

const Register = () => {
    const [name, setName] = useState("");
    const [nameComercial, setNameComercial] = useState("");
    const [telefono, setTelefono] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [especialidad, setEspecialidad] = useState("");
    const [anosExperiencias, setAnosExperiencias] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [redes, setRedes] = useState("");
    const [colegiadoSelect, setColegiadoSelect] = useState("");
    const [colegiadoInput, setColegiadoInput] = useState("");
    const [cerfUniversitario, setCerfUniversitaio] = useState(null);
    const [cerfActicudades, setCerfActicudades] = useState(null);
    const [rut, setRut] = useState("");
    const [titleU, setTitleU] = React.useState("");
    const [homeA, setHomeA] = React.useState("");
    const handleOnChange = (e, prop) => {
        console.log(e.target.value)
        if(prop === "name"){
            setName(e.target.value);
        }else if(prop === "nameComercial"){
            setNameComercial(e.target.value);
        }else if(prop === "telefono"){
            setTelefono(e.target.value);
        }else if(prop === "experiencia"){
            setExperiencia(e.target.value);
        }else if(prop === "especialidad"){
            setEspecialidad(e.target.value);
        }else if(prop === "anosExperiencias"){
            setAnosExperiencias(e.target.value);
        }else if(prop === "descripcion"){
            setDescripcion(e.target.value);
        }else if(prop === "redes"){
            setRedes(e.target.value);
        }else if(prop === "colegiadoSelect"){
            setColegiadoSelect(e.target.value);
        }else if(prop === "colegiadoInput"){
            setColegiadoInput(e.target.value);
        }else if(prop === "rut"){
            setRut(e.target.value);
        }
    }
    const handleTitleUniversitary = e => {
        let fileArchivo = document.getElementById("document1").files[0];
        setTitleU(fileArchivo.name);
        setCerfUniversitaio(fileArchivo);
    };
    const handleHomeActivities = e => {
        let fileArchivo = document.getElementById("document2").files[0];
        setHomeA(fileArchivo.name)
        setCerfActicudades(fileArchivo);
    };
    const handleClick = () => {
    let data = {
        name:name,
        nameComercial:nameComercial,
        telefono:telefono,
        experiencia:experiencia,
        especialidad:especialidad,
        anosExperiencias:anosExperiencias,
        descripcion:descripcion,
        redes:redes,
        colegiado:{
            colegiado:colegiadoSelect,
            number:colegiadoInput,
        },
        cerfUniversitario:cerfUniversitario,
        cerfActicudades:cerfActicudades,
        rut:rut
    }
    
    console.log(data)
    }
    return (
        <Container
            display="grid"
            maxWidth="375px"
            justifyItems="center"
            >
            <Headers name="Pawiis" />
            <Container 
                display="grid"
                justifyItemsTele="center"
                maxWidth="420px"
                maxWidthTele="375px"
                >
                <Title 
                    fontSize="30px"
                    width="70%"
                    padding="10px 30px"
                    >
                    Perfil Veterinario
                </Title>
                <hr style={{width:"90%",backgroundColor:"#e1e1e1",height:"2px",border:"none"}}/>
                <FormPrincipal handleOnChange={handleOnChange} />
                <hr style={{width:"90%",backgroundColor:"#e1e1e1",height:"2px",border:"none"}}/>
                <Container 
                    display="grid"
                    JustifyContent="center"
                    width="90%"
                    widthTele="350px"
                    >
                    <FormSecondary 
                        handleOnChange={handleOnChange} 
                        handleTitleUniversitary={handleTitleUniversitary} 
                        handleHomeActivities={handleHomeActivities} 
                        experiencia={experiencia}
                        especialidad={especialidad}
                        anosExperiencias={anosExperiencias}
                        titleU={titleU}
                        homeA={homeA}
                        />
                </Container>
                <Buttom 
                    width="200px" 
                    margin="10px auto"
                    text="Finalizar"
                    onClick={()=> handleClick()}
                    />
            </Container>
        </Container>
    );
}

export default Register;