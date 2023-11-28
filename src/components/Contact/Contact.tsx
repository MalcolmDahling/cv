import Link from 'next/link';
import { styled } from '../../../stiches.config';
import Tooltip from '../Tooltip/Tooltip';

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
        <Icon
          src="/images/icons_36x36.webp"
          iconType="email"
        ></Icon>

        <Tooltip text="Email"></Tooltip>
      </StyledLink>

      <StyledLink
        href="https://www.linkedin.com/in/malcolm-dahling-175841222/"
        target="_blank"
      >
        <Icon
          src="/images/icons_36x36.webp"
          iconType="linkedIn"
        ></Icon>

        <Tooltip text="LinkedIn"></Tooltip>
      </StyledLink>

      <StyledLink
        href="https://github.com/MalcolmDahling/"
        target="_blank"
      >
        <Icon
          src="/images/icons_36x36.webp"
          iconType="gitHub"
        ></Icon>

        <Tooltip text="GitHub"></Tooltip>
      </StyledLink>
    </Div>
  );
}
