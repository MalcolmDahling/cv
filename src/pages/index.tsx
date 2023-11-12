import ProfilePic from '@/components/ProfilePic/ProfilePic';
import { styled } from '../../stiches.config';
import LeftContainer from '@/components/LeftContainer/LeftContainer';
import Name from '@/components/Name/Name';
import Contact from '@/components/Contact/Contact';
import Nav from '@/components/Nav/Nav';
import MiddleContainer from '@/components/MiddleContainer/MiddleContainer';
import Content from '@/components/Content/Content';
import Background from '@/components/Background/Background';
import Intro from '@/components/Intro/Intro';
import Portfolio from '@/components/Portfolio/Portfolio';
import Skills from '@/components/Skills/Skills';
import Head from 'next/head';

const Wrapper = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  padding: 20,

  boxSizing: 'border-box',
  backgroundColor: '$darkGray',

  '@desktop': {
    display: 'flex',
    justifyContent: 'center',

    paddingTop: 100,
  },
});

const Main = styled('main', {
  maxWidth: 769,

  '@tablet': {
    paddingBottom: 25,
  },
});

export default function Index() {
  return (
    <Wrapper>
      <Head>
        <title>Malcolm Dahling CV</title>
        <meta
          name="googlebot"
          content="nosnippet"
        />
        <meta
          name="robots"
          content="nosnippet"
        />
        <meta
          name="description"
          content="CV för Malcolm Dahling, Frontend Developer."
        />
        <meta
          name="keywords"
          content="malcolm, dahling, frontend, developer, utvecklare, frontendutvecklare, frontend-utvecklare, cv, frontend-developer, backend, html, css, javascript, typescript, nodejs, react, nextjs, jquery, angular, mongodb, sass, git, sql"
        />
        <meta
          name="autor"
          content="Malcolm Dahling"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="icon"
          href="/images/favicon/favicon_black_192x192.png"
          sizes="192x192"
        ></link>
        <link
          rel="apple-touch-icon"
          href="/images/favicon/favicon_black_192x192.png"
          sizes="192x192"
        ></link>
        <link
          rel="manifest"
          href="/manifest.json"
        ></link>
        <meta
          name="google-site-verification"
          content="ANpZxTYl40WSTYB8jgI3J_XGgzAf0hKpnkJWecI54vM"
        />
      </Head>
      <Intro></Intro>

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

        <Skills></Skills>

        <Content></Content>
      </Main>

      <Portfolio></Portfolio>
    </Wrapper>
  );
}
