import { AnimationDelays } from '@/variables/animationDelays';
import { keyframes, styled } from '../../../stiches.config';

const RollIn = keyframes({
  '0%': {
    bottom: 340,
  },
  '100%': {
    bottom: 0,
  },
});

const ImageContainer = styled('div', {
  position: 'relative',
  width: 250,
  height: 340,
});

const InnerContainer = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 340,
  left: 0,
  overflow: 'hidden',

  animation: `${RollIn} 1000ms forwards`,
  animationDelay: `${AnimationDelays.image}ms`,
});

const Img = styled('img', {
  width: '100%',
  zIndex: 1,
});

export default function ProfilePic() {
  return (
    <ImageContainer>
      <InnerContainer>
        <Img src="/images/profilepic.webp"></Img>
      </InnerContainer>
    </ImageContainer>
  );
}
