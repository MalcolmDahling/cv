import { SelectedNavItem } from "@/atoms/SelectedNavItem";
import { styled } from "../../../stiches.config";
import { useRecoilState } from "recoil";

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
        paddingRight:10,
        paddingLeft:10,
    }
});

const Button = styled('button', {

    position:'relative',
    paddingBottom:10,
    paddingLeft:20,
    width:'100%',

    fontSize:24,
    fontFamily:'NeueHaasDisplayRoman',
    letterSpacing:1,
    color:'$white',
    opacity:0.5,
    textAlign:'start',
    cursor:'pointer',
    backgroundColor:'transparent',
    border:'none',
    borderBottom:'1px solid $whiteHalfOpacity',
    transition:'all 350ms',

    '&:hover':{
        opacity:1,
    },

    '&:hover div':{
        width:'100%'
    },

    variants:{
        selected:{
            true:{
                opacity:1,

                'div':{
                    width:'100%'
                }
            }
        }
    }
});

const ExpandingLine = styled('div', {

    position:'absolute',
    left:0,
    bottom:-1,
    height:1,
    width:'0%',

    transition:'all 350ms',
    background:'$white'
});

export default function Nav(){

    const [selectedNavItem, setSelectedNavItem] = useRecoilState(SelectedNavItem);

    function handleClick(item:number){

        setSelectedNavItem(item);
    }

    return(
        <StyledNav>
            <Button onClick={() => {handleClick(0)}} selected={selectedNavItem === 0}>
                PROFIL
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(1)}} selected={selectedNavItem === 1}>
                UTBILDNING
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(2)}} selected={selectedNavItem === 2}>
                PROGRAMMERING
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(3)}} selected={selectedNavItem === 3}>
                KOMPETENSOMRÅDEN
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(4)}} selected={selectedNavItem === 4}>
                PRAKTIK
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(5)}} selected={selectedNavItem === 5}>
                SPRÅKKUNSKAPER
                <ExpandingLine></ExpandingLine>
            </Button>

            <Button onClick={() => {handleClick(6)}} selected={selectedNavItem === 6}>
                ÖVRIGT
                <ExpandingLine></ExpandingLine>
            </Button>
        </StyledNav>
    );
}