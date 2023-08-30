import { useRecoilState } from 'recoil';
import { styled } from '../../../stiches.config';
import { SelectedNavItem } from '@/atoms/SelectedNavItem';

const StyledButton = styled('button', {
  position: 'fixed',
  top: 10,
  right: 10,
  padding: 0,

  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  opacity: 0.5,
  transition: 'all 250ms',

  '&:hover': {
    opacity: 1,
  },

  '@desktop': {
    right: 25,
  },
});

const SVG = styled('svg', {
  width: 40,
  height: 40,
});

export default function ExitButton() {
  const [selectedNavItem, setSelectedNavItem] = useRecoilState(SelectedNavItem);

  function handleExit() {
    setSelectedNavItem(0);
  }

  return (
    <StyledButton onClick={handleExit}>
      <SVG>
        <svg
          width="40"
          height="40"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
            fill="#ffffff"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </SVG>
    </StyledButton>
  );
}
