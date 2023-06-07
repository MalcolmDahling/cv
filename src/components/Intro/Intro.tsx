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

const TextAnim = keyframes({

    '50%':{
        opacity:1,
    },

    '100%':{
        opacity:0,
    }
});

const FadeOutLogo = keyframes({

    '100%':{
        opacity:0,
        pointerEvents:'none',
    }
});

const ZoomIn = keyframes({

    '100%':{
        maskSize:'5000%'
    }
});

const Unblur = keyframes({


    '100%':{
        backdropFilter:'blur(0px)',
        pointerEvents:'none',
    }
});

const MoveLeft = keyframes({

    '100%':{
        transform:'translateX(-100%)'
    }
});

const MoveRight = keyframes({

    '100%':{
        transform:'translateX(100%)'
    }
});

const Wrapper = styled('div', {

    position:'fixed',
    inset:0,
    zIndex:2,

    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',

    // backdropFilter:'blur(12px)',
    '-webkit-backdrop-filter':'blur(12px)',

    animation:`${Unblur} 2000ms forwards`,
    animationDelay:'5500ms',
});

const BlackBar = styled('div', {

    position:'absolute',
    top:0,
    bottom:0,
    width:'39%',

    backgroundColor:'black',

    variants:{
        left:{
            true:{
                left:0,
                animation:`${MoveLeft} 400ms forwards`,
                animationDelay:'5500ms',
            },
            false:{
                right:0,
                animation:`${MoveRight} 400ms forwards`,
                animationDelay:'5500ms',
            }
        }
    }
});

const Mask = styled('div', {

    position:'absolute',
    inset:0,

    backgroundColor:'black',

    animation:`${ZoomIn} 4000ms forwards`,
    animationDelay:'5500ms',

    mask:'url(/images/logo/logo.svg), linear-gradient(#fff 0 0)',
    '-webkit-mask':'url(/images/logo/logo.svg), linear-gradient(#fff 0 0)',

    maskRepeat:'no-repeat',
    '-webkit-mask-repeat':'no-repeat',

    maskPosition:'50% 41.5%',
    '-webkit-mask-position':'50% 41.5%',

    maskComposite:'exclude',
    '-webkit-mask-composite':'destination-out',

    maskSize:'22.3%',

});

const LogoContainer = styled('div', {

    display:'flex',
    gap:10,
    zIndex:3,

    backgroundColor:'black',
    transform:'scale(1.06)',

    animation:`${FadeOutLogo} 1500ms forwards`,
    animationDelay:'4000ms',

    '@tablet':{
        gap:10,
    }
});

const Logo = styled('svg', {

    maxWidth:125,
    width:'10vw',

    fill:'transparent',
    stroke:'#FFFFFF',
    strokeWidth:1,
    strokeDasharray:400,
    strokeDashoffset:400,

    animation:`${DrawLogo} 4000ms forwards`,
    animationDelay:'500ms',

    variants:{
        moveRight:{
            true:{
                transform:'translateX(5px)'
            }
        }
    }
});

const P = styled('p', {

    margin:0,

    animation:`${TextAnim} 3000ms forwards`,
    animationDelay:'2500ms',

    opacity:0,
    fontFamily:'NeutronsDemoRegular',
    fontSize:'calc(20px + 5vw)',
    textAlign:'center',
    letterSpacing:5,
    userSelect:'none',
    lineHeight:'100%'
});

export default function Intro(){

    return(
        <Wrapper>
            <BlackBar left={true}></BlackBar>
            <Mask></Mask>
            <BlackBar left={false}></BlackBar>

            <LogoContainer>
                    <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.21 146.41">
                        <polygon points="72.71 145.21 .71 73.21 72.71 1.21 72.71 28.21 27.71 73.21 72.71 118.21 72.71 145.21"/>
                    </Logo>

                    <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.21 145" moveRight={true}>
                        <polygon points=".68 144.5 45.68 .5 67.96 .5 22.96 144.5 .68 144.5"/>
                    </Logo>

                    <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.21 146.41">
                        <polygon points=".5 1.21 72.5 73.21 .5 145.21 .5 118.21 45.5 73.21 .5 28.21 .5 1.21"/>
                    </Logo>
            </LogoContainer>

            <P>MALCOLM DAHLING</P>
        </Wrapper>
    );
}