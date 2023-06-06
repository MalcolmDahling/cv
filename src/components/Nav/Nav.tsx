import { SelectedNavItem } from "@/atoms/SelectedNavItem";
import { keyframes, styled } from "../../../stiches.config";
import { useRecoilState } from "recoil";

const FadeIn = keyframes({

    '0%':{
        width:'0%',
        color:'transparent',
        opacity:0,
    },
    '100%':{
        width:'100%',
        color:'$whiteHalfOpacity',
        opacity:1
    }
});

const StyledNav = styled('nav', {

    width:'100%',
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'column',
    gap:20,
    
    boxSizing:'border-box',
    marginTop:-7,
    paddingBottom:4,

    '@tablet':{
        marginTop:10,
        paddingRight:'$1',
        paddingLeft:'$1',
    }
});

const Button = styled('button', {

    position:'relative',
    paddingBottom:'$1',
    width:'0%',
    paddingLeft:20,

    fontSize:24,
    fontFamily:'NeueHaasDisplayRoman',
    letterSpacing:1,
    color:'transparent',
    textAlign:'start',
    cursor:'pointer',
    backgroundColor:'transparent',
    border:'none',
    borderBottom:'1px solid $whiteHalfOpacity',
    opacity:0,
    animation:`${FadeIn} 1000ms forwards`,

    '@desktop':{

        '&:hover p':{
            color:'$white !important'
        },
    
        '&:hover div':{
            width:'100%'
        },
    },

    variants:{

        selected:{
            true:{
                'p':{
                    color:'$white !important',
                },

                'div':{
                    width:'100%'
                }
            }
        },

        animationDelay:{
            0:{
                animationDelay:'400ms',
            },

            1:{
                animationDelay:'600ms',
            },

            2:{
                animationDelay:'800ms',
            },

            3:{
                animationDelay:'1000ms',
            },

            4:{
                animationDelay:'1200ms',
            },

            5:{
                animationDelay:'1400ms',
            },

            6:{
                animationDelay:'1600ms',
            }
        }
    }
});

const P = styled('p', {

    margin:0,

    transition:'all 350ms',
});

const ExpandingLine = styled('div', {

    position:'absolute',
    left:0,
    bottom:-1,
    height:1,
    width:'0%',

    transition:'all 350ms',
    background:'$white',
});

export default function Nav(){

    const [selectedNavItem, setSelectedNavItem] = useRecoilState(SelectedNavItem);

    function handleClick(item:number){

        setSelectedNavItem(item);
    }

    return(
        <StyledNav>
            <Button onClick={() => {handleClick(0)}} selected={selectedNavItem === 0} animationDelay={0}>
                <P>PROFIL</P>
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(1)}} selected={selectedNavItem === 1} animationDelay={1}>
                <P>UTBILDNING</P>
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(2)}} selected={selectedNavItem === 2} animationDelay={2}>
                <P>PROGRAMMERING</P>
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(3)}} selected={selectedNavItem === 3} animationDelay={3}>
                <P>KOMPETENSOMRÅDEN</P>
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(4)}} selected={selectedNavItem === 4} animationDelay={4}>
                <P>PRAKTIK</P>
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(5)}} selected={selectedNavItem === 5} animationDelay={5}>
                <P>SPRÅKKUNSKAPER</P>
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(6)}} selected={selectedNavItem === 6} animationDelay={6}>
                <P>ÖVRIGT</P>
                <ExpandingLine></ExpandingLine>
            </Button>
        </StyledNav>
    );
}