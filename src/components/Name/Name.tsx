import { AnimationDelays } from '@/variables/animationDelays';
import { keyframes, styled } from '../../../stiches.config';
import TypeIt from 'typeit-react';

const FadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const Div = styled('div', {
  marginBottom: 20,

  display: 'flex',
  flexDirection: 'column',

  '@tablet': {
    marginTop: 50,
    marginBottom: 25,

    alignItems: 'center',
    gap: '$1',

    textAlign: 'center',
  },
});

const H1 = styled('h1', {
  margin: 0,

  color: '$white',
  fontSize: 77,

  '@tablet': {
    fontSize: 50,
  },
});

const H2 = styled('h2', {
  margin: 0,

  color: '$white',
  fontSize: 40,

  '@tablet': {
    fontSize: 28,
  },
});

const EmailButton = styled('button', {
  position: 'relative',
  width: 'fit-content',
  margin: 0,
  padding: 0,

  border: 'none',
  background: 'transparent',
  color: '$white',
  fontSize: 20,
  textDecoration: 'none',
  cursor: 'pointer',

  opacity: 0,
  animation: `${FadeIn} 1000ms forwards`,
  animationDelay: `${AnimationDelays.email}ms`,

  '&:hover div': {
    width: '100%',
  },
});

const ExpandingLine = styled('div', {
  position: 'absolute',
  bottom: 3,
  height: 1,
  width: '0%',

  transition: 'all 250ms',

  backgroundColor: '$white',
});

export default function Name() {
  function handleClick() {
    window.open('mailto' + ':' + 'mac' + '.' + 'dahling' + '@' + 'gmail' + '.' + 'com', '_blank');
  }

  return (
    <Div>
      <H1>
        <TypeIt
          options={{ cursor: false, lifeLike: true }}
          getBeforeInit={(instance) => {
            instance.pause(AnimationDelays.name).type('MALCOLM DAHLING');
            return instance;
          }}
        ></TypeIt>
      </H1>
      <H2>
        <TypeIt
          options={{ cursor: false, lifeLike: true }}
          getBeforeInit={(instance) => {
            instance.pause(AnimationDelays.title).type('FRONTEND DEVELOPER');
            return instance;
          }}
        ></TypeIt>
      </H2>

      <EmailButton onClick={handleClick}>
        <img src="/images/email.png"></img>
        <ExpandingLine></ExpandingLine>
      </EmailButton>
    </Div>
  );
}
