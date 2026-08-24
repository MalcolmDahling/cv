import { SelectedNavItem } from '@/atoms/SelectedNavItem';
import { keyframes, styled } from '../../../stiches.config';
import { useEffect } from 'react';
import { useBreakpoint } from 'use-breakpoint';
import { useAtom } from 'jotai';
import { AnimationDelays } from '@/variables/animationDelays';

const FadeIn = keyframes({
  '0%': {
    width: '0%',
    opacity: 0,
  },
  '100%': {
    width: '100%',
    opacity: 1,
  },
});

const StyledNav = styled('nav', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  gap: 20,

  boxSizing: 'border-box',
  marginTop: -7,
  paddingBottom: 4,

  '@tablet': {
    marginTop: 10,
    paddingRight: '$1',
    paddingLeft: '$1',
  },
});

const Button = styled('button', {
  position: 'relative',
  paddingBottom: '$1',
  width: '0%',
  paddingLeft: 20,

  fontSize: 24,
  fontFamily: 'NeueHaasDisplayRoman',
  letterSpacing: 1,
  color: '$whiteHalfOpacity',
  textAlign: 'start',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid $whiteHalfOpacity',
  opacity: 0,
  animation: `${FadeIn} 1000ms forwards`,

  '@desktop': {
    '&:hover p': {
      color: '$white !important',
    },

    '&:hover div': {
      width: '100%',
    },
  },

  '@mobile': {
    fontSize: 16,
  },

  variants: {
    selected: {
      true: {
        p: {
          color: '$white !important',
        },

        div: {
          width: '100%',
        },
      },
    },

    animationDelay: {
      0: {
        animationDelay: `${AnimationDelays.nav0}ms`,
      },

      1: {
        animationDelay: `${AnimationDelays.nav1}ms`,
      },

      2: {
        animationDelay: `${AnimationDelays.nav2}ms`,
      },

      3: {
        animationDelay: `${AnimationDelays.nav3}ms`,
      },

      4: {
        animationDelay: `${AnimationDelays.nav4}ms`,
      },

      5: {
        animationDelay: `${AnimationDelays.nav5}ms`,
      },

      6: {
        animationDelay: `${AnimationDelays.nav6}ms`,
      },
    },
  },
});

const P = styled('p', {
  margin: 0,

  transition: 'color 350ms',
});

const ExpandingLine = styled('div', {
  position: 'absolute',
  left: 0,
  bottom: -1,
  height: 1,
  width: '0%',

  transition: 'all 350ms',
  background: '$white',
});

const BREAKPOINTS = { mobile: 0, tablet: 861, desktop: 1000 };

export default function Nav() {
  const [selectedNavItem, setSelectedNavItem] = useAtom(SelectedNavItem);
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');

  function handleClick(item: number) {
    setSelectedNavItem(item);
  }

  //disable body scrolling when portfolio is open and user is on tablet/mobile
  useEffect(() => {
    if (selectedNavItem === 6 && breakpoint !== 'desktop') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedNavItem, breakpoint]);

  return (
    <StyledNav>
      <Button
        onClick={() => {
          handleClick(0);
        }}
        selected={selectedNavItem === 0}
        animationDelay={0}
      >
        <P>ARBETSLIVSERFARENHET</P>
        <ExpandingLine></ExpandingLine>
      </Button>

      <Button
        onClick={() => {
          handleClick(1);
        }}
        selected={selectedNavItem === 1}
        animationDelay={1}
      >
        <P>UTBILDNING</P>
        <ExpandingLine></ExpandingLine>
      </Button>

      <Button
        onClick={() => {
          handleClick(2);
        }}
        selected={selectedNavItem === 2}
        animationDelay={2}
      >
        <P>PROFIL</P>
        <ExpandingLine></ExpandingLine>
      </Button>

      <Button
        onClick={() => {
          handleClick(3);
        }}
        selected={selectedNavItem === 3}
        animationDelay={3}
      >
        <P>PROGRAMMERING</P>
        <ExpandingLine></ExpandingLine>
      </Button>

      <Button
        onClick={() => {
          handleClick(4);
        }}
        selected={selectedNavItem === 4}
        animationDelay={4}
      >
        <P>KOMPETENSOMRÅDEN</P>
        <ExpandingLine></ExpandingLine>
      </Button>

      <Button
        onClick={() => {
          handleClick(5);
        }}
        selected={selectedNavItem === 5}
        animationDelay={5}
      >
        <P>ÖVRIGT</P>
        <ExpandingLine></ExpandingLine>
      </Button>

      <Button
        onClick={() => {
          handleClick(6);
        }}
        selected={selectedNavItem === 6}
        animationDelay={6}
      >
        <P>PORTFOLIO</P>
        <ExpandingLine></ExpandingLine>
      </Button>
    </StyledNav>
  );
}
