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

  variants: {
    textSpacing: {
      true: {
        bottom: '-95%',
      },
    },
  },
});

const Svg = styled('svg', {
  position: 'absolute',
  width: '100%',
  height: '100%',

  pointerEvents: 'none',
  transition: 'all 400ms',

  fill: 'transparent',
  stroke: '#FFFFFF',
  strokeWidth: 2,
  strokeDasharray: 200,
  strokeDashoffset: 200,
});

interface props {
  text: string;
  textSpacing?: boolean;
}

export default function Tooltip(props: props) {
  return (
    <>
      <Svg>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
        ></rect>
      </Svg>

      <P textSpacing={props.textSpacing}>{props.text}</P>
    </>
  );
}
