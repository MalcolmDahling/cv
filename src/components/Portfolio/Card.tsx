import Link from 'next/link';
import { styled } from '../../../stiches.config';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  transition: 'all 500ms',
  pointerEvents: 'auto',

  '@desktop': {
    '&:hover': {
      filter: 'blur(0px) grayscale(0) !important',
    },
  },
});

const StyledLink = styled(Link, {
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 5,

  '&:hover h3': {
    opacity: 1,
  },
});

const Image = styled('img', {
  width: 400,
  maxWidth: 400,

  '@tablet': {
    width: '100%',
  },
});

const Name = styled('h3', {
  margin: 0,

  fontWeight: 'normal',
  textAlign: 'center',
  color: '$white',
  opacity: 0.5,
  transition: 'all 250ms',
});

const GithubLink = styled(Link, {
  color: '$white',
  opacity: 0.5,
  transition: 'all 250ms',
  textDecoration: 'none',

  '&:hover': {
    opacity: 1,
  },
});

interface props {
  name: string;
  image: string;
  url: string;
  github?: string;
}

export default function Card(props: props) {
  return (
    <Container>
      <StyledLink
        href={props.url}
        target="_blank"
      >
        <Image src={props.image}></Image>
        <Name>{props.name}</Name>
      </StyledLink>
      {props.github && <GithubLink href={props.github} target="_blank">GITHUB</GithubLink>}
    </Container>
  );
}
