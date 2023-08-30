import React from 'react';
import { styled } from '../../../stiches.config';

const Div = styled('div', {
  maxWidth: 250,

  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  justifyContent: 'center',

  '@tablet': {
    maxWidth: '50%',
  },

  '@mobile': {
    maxWidth: '100%',
    paddingRight: '$1',
    paddingLeft: '$1',
    marginBottom: '$1',
  },
});

interface props {
  children: React.ReactNode;
}

export default function LeftContainer(props: props) {
  return <Div>{props.children}</Div>;
}
