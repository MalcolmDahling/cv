import { styled } from '../../../stiches.config';

const Img = styled('img', {
  width: '100%',
  zIndex: 1,
});

export default function ProfilePic() {
  return <Img src="/images/profilepic.webp"></Img>;
}
