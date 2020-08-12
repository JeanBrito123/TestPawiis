import React from 'react';
import Container from '../generic/Container';
import AddIcon from '@material-ui/icons/Add';

const Redes = (props) => {
    return (
        <Container display="grid" gridColumns="auto auto auto auto">
            {props.image ? props.image.map((e, i) => {
                return (
                    <Container key={i} display="grid" height="30px">
                        <div>
                            <img 
                            src={e} 
                            alt="" 
                            style={{width:"20px",height:"20px"}}
                            />
                        </div>
                        <div>
                        <span
                            style={{
                                backgroundColor: "#11487d",
                                width: "25px",
                                height: "20px",
                                borderRadius: "20px",
                                textAlign: "center"
                            }}
                        >
                            <AddIcon style={{ fontSize: 20, color: "#FFF" }} />
                        </span>
                    </div>
                        </Container>
                )
            })
                : null}
        </Container>
    );
}

export default Redes;