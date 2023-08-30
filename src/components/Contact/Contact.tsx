import Link from 'next/link';
import { styled } from '../../../stiches.config';
import Tooltip from './Tooltip';

const Div = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledLink = styled(Link, {
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:hover svg': {
    strokeDashoffset: 0,
  },

  '&:hover p': {
    opacity: 1,
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

const Icon = styled('img', {
  objectFit: 'none',
  width: 36,
  height: 36,
  padding: 7,

  boxSizing: 'content-box',
  opacity: 0.5,
  transition: 'all 200ms',

  '&:hover': {
    opacity: 1,
  },

  variants: {
    iconType: {
      email: {
        objectPosition: '0px 0px',
      },
      linkedIn: {
        objectPosition: '-36px 0px',
      },
      gitHub: {
        objectPosition: '-72px 0px',
      },
    },
  },
});

export default function Contact() {
  return (
    <Div>
      <StyledLink href="mailto:mac.dahling@gmail.com">
        <Svg>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
          ></rect>
        </Svg>
        <Icon
          src="/images/icons_36x36.webp"
          iconType="email"
        ></Icon>
        <Tooltip text="Email"></Tooltip>
      </StyledLink>

      <StyledLink href="https://www.linkedin.com/in/malcolm-dahling-175841222/">
        <Svg>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
          ></rect>
        </Svg>
        <Icon
          src="/images/icons_36x36.webp"
          iconType="linkedIn"
        ></Icon>
        <Tooltip text="LinkedIn"></Tooltip>
      </StyledLink>

      <StyledLink href="https://github.com/MalcolmDahling/">
        <Svg>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
          ></rect>
        </Svg>
        <Icon
          src="/images/icons_36x36.webp"
          iconType="gitHub"
        ></Icon>
        <Tooltip text="GitHub"></Tooltip>
      </StyledLink>
    </Div>
  );
}
