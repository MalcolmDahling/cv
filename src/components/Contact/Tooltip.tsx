import { styled } from '../../../stiches.config';

const P = styled('p', {
  position: 'absolute',
  bottom: '-80%',
  left: '50%',

  translate: '-50%',
  color: '$white',
  opacity: 0,
  textAlign: 'center',
  transition: 'all 400ms',
  userSelect: 'none',
  pointerEvents: 'none',
});

interface props {
  text: string;
}

export default function Tooltip(props: props) {
  return <P>{props.text}</P>;
}
