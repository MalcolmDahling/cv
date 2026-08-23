import Tooltip from '../Tooltip/Tooltip';
import { keyframes, styled } from '../../../stiches.config';
import { useState } from 'react';

const FadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const AnimationContainer = styled('div', {
  opacity: 0,
});

const Container = styled('div', {
  width: 30,
  height: 30,
  zIndex: 1,
  position: 'relative',
  padding: 7,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  opacity: 0.5,
  whiteSpace: 'nowrap',
  transition: 'opacity 200ms',

  '&:hover': {
    opacity: 1,
  },

  '&:hover svg': {
    strokeDashoffset: 0,
  },

  '&:hover p': {
    opacity: 1,
  },
});

const Img = styled('img', {
  width: 30,
  height: 30,
});

interface props {
  src: string;
  tooltip: string;
  animationDelay: number;
}

export default function SkillsItem(props: props) {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <AnimationContainer
      style={{ animation: `${FadeIn} 1000ms forwards`, animationDelay: `${props.animationDelay}ms` }}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      <Container>
        <Img
          src={props.src}
          alt={props.tooltip}
        ></Img>

        <Tooltip
          text={props.tooltip}
          textSpacing={true}
        ></Tooltip>
      </Container>
    </AnimationContainer>
  );
}
