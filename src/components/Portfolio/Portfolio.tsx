import { SelectedNavItem } from '@/atoms/SelectedNavItem';
import { styled } from '../../../stiches.config';
import ExitButton from './ExitButton';
import CardContainer from './CardContainer';
import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

const Background = styled('div', {
  position: 'fixed',
  inset: 0,
  zIndex: 1,

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
  zIndex: 2,

  overflowY: 'scroll',

  '@desktop': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '@xlDesktop': {
    overflowY: 'auto',
  },
});

export default function Portfolio() {
  const [selectedNavItem, setSelectedNavItem] = useAtom(SelectedNavItem);
  const [show, setShow] = useState(false);
  const [displayNone, setDisplayNone] = useState(true);

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
    setSelectedNavItem(0);
  }

  return (
    <>
      <Background
        show={show}
        displayNone={displayNone}
        onClick={(e) => handleClick(e)}
      >
        <Container onClick={(e) => handleClick(e)}>
          <CardContainer></CardContainer>
        </Container>
        <ExitButton></ExitButton>
      </Background>
    </>
  );
}
