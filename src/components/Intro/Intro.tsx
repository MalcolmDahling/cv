import { styled } from "../../../stiches.config";

const Background = styled('div', {

    position:'absolute',
    inset:0,
    zIndex:1,

    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    backgroundColor:'black'
});

const P = styled('p', {

    fontFamily:'Neutrons',
    fontSize:300
});

export default function Intro(){

    return(
        <Background>
            <P>CV</P>
        </Background>
    );
}