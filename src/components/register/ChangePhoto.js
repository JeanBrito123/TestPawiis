import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import Container from '../generic/Container';


const ChangePhoto = () => {
    return (
        <Container 
            width="80px"
            height="80px"
            display="grid"
            justifyItems="center"
            borderRadius="50%"
            bgC="#d5d5d5"
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
        </Container>
    );
}

export default ChangePhoto;