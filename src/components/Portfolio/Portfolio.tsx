import { SelectedNavItem } from '@/atoms/SelectedNavItem';
import { useRecoilState } from 'recoil';
import { styled } from '../../../stiches.config';
import ExitButton from './ExitButton';
import CardContainer from './CardContainer';
import React, { useEffect, useRef, useState } from 'react';

const Background = styled('div', {
  position: 'fixed',
  inset: 0,
  zIndex: 1,
  padding: 20,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  opacity: 0,
  backgroundColor: '$blackHalfOpacity',
  backdropFilter: 'blur(12px)',
  transition: 'all 500ms',

  variants: {
    show: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
    displayNone: {
      true: {
        display: 'none',
      },
      false: {
        display: 'block',
      },
    },
  },
});

const Container = styled('div', {
  position: 'absolute',
  inset: 0,
  padding: '0px 60px',
  zIndex: 2,

  display: 'flex',
  justifyContent: 'center',

  pointerEvents: 'none',
  overflowY: 'scroll',

  '@xlDesktop': {
    alignItems: 'center',
    overflowY: 'auto',
  },
});

export default function Portfolio() {
  const [selectedNavItem, setSelectedNavItem] = useRecoilState(SelectedNavItem);
  const [show, setShow] = useState(false);
  const [displayNone, setDisplayNone] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedNavItem === 6) {
      setDisplayNone(false);

      setTimeout(() => {
        setShow(true);
      }, 50);
    } else {
      setShow(false);

      setTimeout(() => {
        setDisplayNone(true);
      }, 500);
    }
  }, [selectedNavItem]);

  function handleClick(e: React.MouseEvent) {
    if (e.target === ref.current) {
      setSelectedNavItem(0);
    }
  }

  return (
    <>
      <Background
        show={show}
        displayNone={displayNone}
        ref={ref}
        onClick={(e) => handleClick(e)}
      >
        <Container>
          <CardContainer></CardContainer>
        </Container>
        <ExitButton></ExitButton>
      </Background>
    </>
  );
}
