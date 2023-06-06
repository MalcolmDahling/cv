import ProfilePic from "@/components/ProfilePic/ProfilePic";
import { styled } from "../../stiches.config";
import LeftContainer from "@/components/LeftContainer/LeftContainer";
import Name from "@/components/Name/Name";
import Contact from "@/components/Contact/Contact";
import Nav from "@/components/Nav/Nav";
import MiddleContainer from "@/components/MiddleContainer/MiddleContainer";
import Content from "@/components/Content/Content";
import Background from "@/components/Background/Background";
import Intro from "@/components/Intro/Intro";

const Wrapper = styled('div', {

    position:'relative',
    width:'100%',
    height:'100%',
    minHeight:'100vh',
    padding:20,

    boxSizing:'border-box',
    backgroundColor:'$darkGray',

    '@desktop':{
        display:'flex',
        justifyContent:'center',

        paddingTop:100,
    }
});

const Main = styled('main', {

    maxWidth:769,

    '@tablet':{
        paddingBottom:25
    }
});

export default function Index() {

    return (
        <Wrapper>
            
            <Background></Background>

            <Main>
                <Name></Name>

                <MiddleContainer>
                    <LeftContainer>
                        <ProfilePic></ProfilePic>
                        <Contact></Contact>
                    </LeftContainer>

                    <Nav></Nav>
                </MiddleContainer>

                <Content></Content>
            </Main>
        </Wrapper>
    );
}
