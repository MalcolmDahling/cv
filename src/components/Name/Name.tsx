import Link from 'next/link';
import { styled } from '../../../stiches.config';

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
  fontSize: 80,

  '@tablet': {
    fontSize: 60,
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

const Email = styled(Link, {
  width: 'fit-content',
  margin: 0,

  color: '$white',
  fontSize: 20,
  textDecoration: 'none',

  '&:hover div': {
    width: '100%',
  },
});

const ExpandingLine = styled('div', {
  height: 1,
  width: '0%',

  transition: 'all 250ms',

  backgroundColor: '$white',
});

export default function Name() {
  return (
    <Div>
      <H1>MALCOLM DAHLING</H1>
      <H2>FRONTEND DEVELOPER</H2>

      <Email href="mailto:mac.dahling@gmail.com">
        mac.dahling@gmail.com
        <ExpandingLine></ExpandingLine>
      </Email>
    </Div>
  );
}
