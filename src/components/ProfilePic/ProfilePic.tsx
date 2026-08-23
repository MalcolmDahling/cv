import { AnimationDelays } from '@/variables/animationDelays';
import { keyframes, styled } from '../../../stiches.config';

const FadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const Img = styled('img', {
  width: '100%',
  zIndex: 1,

  opacity: 0,
  animation: `${FadeIn} 1000ms forwards`,
  animationDelay: `${AnimationDelays.image}ms`,
});

export default function ProfilePic() {
  return <Img src="/images/profilepic.webp"></Img>;
}
