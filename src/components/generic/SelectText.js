import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const SelectText = (props) => {
    
    return (
        <div >
            <Selection
                id="clickSelect"
                className="selection"
                width={props.width}
                widthTele={props.widthTele}
                value={props.experiencia}
                onChange={(e)=> props.onChange(e)}
                padding="0 0 0 10px"
                border="1px solid #637798"
                borderRadius="20px"
                // color="#f1f1f1"
                >
                <option value={""}>{""}</option>
                {props.data ? props.data.map((e,i) => {
                    return(
                    <option key={i} value={e}>{e}</option>
                    )
                })
            :   null}
            </Selection>
            <CompSpan 
                marginSpan={props.marginSpan}
                marginTele={props.marginSpanTele}
                >
                    <ArrowDropDownIcon 
                        style={{ fontSize:30, color:"#1b4473" }} 
                        />
            </CompSpan>
        </div>
    );
}


const Selection = styled.select`
    width: ${props => props.width};
    height: ${props => props.height || "27px"};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    background-color: ${props => props.bgC || "#FFF"};
    font-size: ${props => props.fontSize || "14px"};
    color: ${props => props.color || "gray"};
    position: ${props => props.position};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    outline: none;
    @media(max-width: 420px) {
        width: ${props => props.widthTele};
        margin: ${props => props.marginTele};
    }
`;
const CompSpan = styled.span `
    margin: ${props => props.marginSpan};
    width: 10px;
    @media(max-width: 420px) {
        width: ${props => props.widthTele};
        margin: ${props => props.marginTele};
    }
`;

export default SelectText;
