import Tooltip from '../Tooltip/Tooltip';
import { styled } from '../../../stiches.config';

const Container = styled('div', {
  width: 30,
  height: 30,
  zIndex: 1,
  position: 'relative',
  padding: 7,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  whiteSpace: 'nowrap',
  transition: 'all 200ms',
  opacity: 0.5,

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
}

export default function SkillsItem(props: props) {
  return (
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
  );
}
