import { keyframes, styled } from "../../../stiches.config";

const DrawLogo = keyframes({

    '50%':{
        strokeDashoffset:0,
        fill:'transparent'
    },
    '100%':{
        fill:'#FFFFFF',
        strokeDashoffset:0,
    }
});

const FadeIn = keyframes({

    '100%':{
        opacity:1
    }
})

const Background = styled('div', {

    position:'absolute',
    inset:0,
    zIndex:2,

    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',

    backgroundColor:'black'
});

const LogoContainer = styled('div', {

    display:'flex',
    gap:20,
});

const Logo = styled('svg', {

    width:150,

    fill:'transparent',
    stroke:'#FFFFFF',
    strokeWidth:1,
    strokeDasharray:400,
    strokeDashoffset:400,

    animation:`${DrawLogo} 4000ms forwards`,
    animationDelay:'500ms',

    variants:{
        smaller:{
            true:{
                transform:'scale(0.97)'
            }
        }
    }
});

const P = styled('p', {

    margin:0,

    animation:`${FadeIn} 1500ms forwards`,
    animationDelay:'2500ms',

    opacity:0,
    fontFamily:'NeutronsDemoRegular',
    fontSize:80,
    letterSpacing:5,
});

export default function Intro(){

    return(
        <Background>
            <LogoContainer>

                <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.21 146.41">
                    <polygon points="72.71 145.21 .71 73.21 72.71 1.21 72.71 28.21 27.71 73.21 72.71 118.21 72.71 145.21"/>
                </Logo>

                <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.64 145" smaller={true}>
                    <polygon points=".68 144.5 45.68 .5 67.96 .5 22.96 144.5 .68 144.5"/>
                </Logo>

                <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.21 146.41">
                    <polygon points=".5 1.21 72.5 73.21 .5 145.21 .5 118.21 45.5 73.21 .5 28.21 .5 1.21"/>
                </Logo>
                
            </LogoContainer>

            <P>MALCOLM DAHLING</P>
        </Background>
    );
}