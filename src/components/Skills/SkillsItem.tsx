import { Tooltip } from 'react-tooltip';
import { styled } from '../../../stiches.config';

const Container = styled('div', {
  width: 30,
  height: 30,
  zIndex: 1,

  transition: 'all 200ms',
  opacity: 0.5,

  '&:hover': {
    opacity: 1,
  },
});

const Img = styled('img', {
  width: 30,
  height: 30,
});

const StyledTooltip = styled(Tooltip, {
  transition: 'all 200ms !important',
});

interface props {
  src: string;
  tooltip: string;
}

export default function SkillsItem(props: props) {
  return (
    <Container
      data-tooltip-id={props.tooltip}
      data-tooltip-content={props.tooltip}
    >
      <Img
        src={props.src}
        alt={props.tooltip}
      ></Img>
      <StyledTooltip id={props.tooltip}></StyledTooltip>
    </Container>
  );
}
