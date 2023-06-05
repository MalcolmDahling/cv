import Link from "next/link";
import { styled } from "../../../stiches.config";

const Div = styled('div', {

    display:'flex',
    gap:10,
    justifyContent:'space-between'
});

const StyledLink = styled(Link, {

    
});

const Icon = styled('img', {

    objectFit:'none',
    width:36,
    height:36,
    padding:5,

    boxSizing:'content-box',
    opacity:0.5,
    border:'2px solid white',
    transition:'all 200ms',

    '&:hover':{
        opacity:1
    },

    variants:{
        iconType:{
            email:{
                objectPosition:'0px 0px'
            },
            linkedIn:{
                objectPosition:'-36px 0px'
            },
            gitHub:{
                objectPosition:'-72px 0px'
            }
        }
    }
});

export default function Contact(){

    return(
        <Div>
            <StyledLink href="mailto:mac.dahling@gmail.com">
                <Icon src="/images/icons_36x36.webp" iconType="email"></Icon>
            </StyledLink>

            <StyledLink href="https://www.linkedin.com/in/malcolm-dahling-175841222/">
                <Icon src="/images/icons_36x36.webp" iconType="linkedIn"></Icon>
            </StyledLink>

            <StyledLink href="https://github.com/MalcolmDahling/">
                <Icon src="/images/icons_36x36.webp" iconType="gitHub"></Icon>
            </StyledLink>
        </Div>
    );
}