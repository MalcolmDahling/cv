import { styled } from "../../../stiches.config";

const Div = styled('div', {

    position:'absolute',
    top:'-50%',
    right:0,
    bottom:'50%',
    left:'-50%',
    zIndex:-1,
    rotate:'-10deg',

    backgroundColor:'$darkGray',
});

export default function Background(){

    return(
        <Div>
        
        </Div>
    );
}