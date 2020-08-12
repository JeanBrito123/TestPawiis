import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import InputText from '../generic/InputText';
import Container from '../generic/Container';


const ChangePhoto = (props) => {

    const cargarDocumentos = () => {
            document.getElementById("fotoUser").click()
    }
    return (
        <Container 
            width="80px"
            height="80px"
            display="grid"
            justifyItems="center"
            borderRadius="50%"
            bgC="#d5d5d5"
            onClick={() => cargarDocumentos()}
            >
                <div>
                    <PersonIcon style={{ fontSize:50, color:"#FFF"}} />
                </div>
                <div 
                    style={{
                        width:"50px", 
                        fontSize:"10px", 
                        textAlign:"center",
                        marginTop:"-20px",
                        color:"#9c9c9c"
                    }}>
                    Cambiar imagen
                </div>
                <InputText
                    type="file"
                    id="fotoUser"
                    accept="/png/jpg/svg/jpeg"
                    onChange={e => props.onChange(e.target)}
                    style={{ display: "none" }}
                />
        </Container>
    );
}

export default ChangePhoto;