import React from "react";
import { styled } from "../../../stiches.config";

const Div = styled('div', {

    display:'flex',
    gap:20,

    '@tablet':{
        flexDirection:'column',
        alignItems:'center',
    }
});

interface props{
    children:React.ReactNode;
}

export default function MiddleContainer(props:props){

    return(
        <Div>
            {props.children}
        </Div>
    );
}