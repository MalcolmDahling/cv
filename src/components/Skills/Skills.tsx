import Image from 'next/image';
import { styled } from '../../../stiches.config';

const Section = styled('section', {
  margin: '20px 0px',

  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  justifyContent: 'space-between',

  opacity: 0.5,

  '@tablet': {
    padding: '0px 10px',
  },

  '@mobile': {
    gap: '10px 2px',
  },
});

const Img = styled('img', {
  width: 30,
  height: 30,

  '@tablet': {},
});

export default function Skills() {
  return (
    <Section>
      <Img
        alt="HTML5"
        src="https://deviconapi.vercel.app/html5?theme=dark&size=30"
      />
      <Img
        alt="Javascript"
        src="https://deviconapi.vercel.app/javascript?theme=dark&size=30"
      />
      <Img
        alt="Typescript"
        src="https://deviconapi.vercel.app/typescript?theme=dark&size=30"
      />
      <Img
        alt="NodeJS"
        src="https://deviconapi.vercel.app/nodejs?theme=dark&size=30"
      />
      <Img
        alt="React"
        src="https://deviconapi.vercel.app/react?theme=dark&size=30"
      />
      <Img
        alt="NextJS"
        src="https://deviconapi.vercel.app/nextjs?theme=dark&size=30"
      />
      <Img
        alt="JQuery"
        src="https://deviconapi.vercel.app/jquery?theme=dark&size=30"
      />
      <Img
        alt="Angular"
        src="https://deviconapi.vercel.app/angularjs?theme=dark&size=30"
      />
      <Img
        alt="MySQL"
        src="https://deviconapi.vercel.app/mysql?theme=dark&size=30"
      />
      <Img
        alt="MongoDB"
        src="https://deviconapi.vercel.app/mongodb?theme=dark&size=30"
      />
      <Img
        alt="SASS"
        src="https://deviconapi.vercel.app/sass?theme=dark&size=30"
      />
      <Img
        alt="Git"
        src="https://deviconapi.vercel.app/git?theme=dark&size=30"
      />
      <Img
        alt="GitHub"
        src="https://deviconapi.vercel.app/github?theme=dark&size=30"
      />
      <Img
        alt="Photoshop"
        src="https://deviconapi.vercel.app/photoshop?theme=dark&size=30"
      />
      <Img
        alt="Illustrator"
        src="https://deviconapi.vercel.app/illustrator?theme=dark&size=30"
      />
      <Img
        alt="PHP"
        src="https://deviconapi.vercel.app/php?theme=dark&size=30"
      />
      <Img
        alt="C#"
        src="https://deviconapi.vercel.app/csharp?theme=dark&size=30"
      />
      <Img
        alt="C++"
        src="https://deviconapi.vercel.app/cplusplus?theme=dark&size=30"
      />
    </Section>
  );
}
