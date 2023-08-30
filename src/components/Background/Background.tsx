import { styled } from '../../../stiches.config';

const Div = styled('div', {
  position: 'absolute',
  inset: 0,
  zIndex: 0,

  overflowX: 'hidden',
  pointerEvents: 'none',
});

const Wave = styled('img', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '50%',
  minWidth: 1200,
  pointerEvents: 'none',
});

export default function Background() {
  return (
    <Div>
      <Wave src="/images/Wave.svg"></Wave>
    </Div>
  );
}
