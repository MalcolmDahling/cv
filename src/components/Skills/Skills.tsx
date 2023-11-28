import { styled } from '../../../stiches.config';
import SkillsItem from './SkillsItem';

const Section = styled('section', {
  margin: '30px 0px',

  display: 'flex',
  flexWrap: 'wrap',
  gap: 7,
  justifyContent: 'space-between',

  '@tablet': {
    padding: '0px 10px',
    justifyContent: 'center',
    gap: '28px 7px',
  },
});

export default function Skills() {
  return (
    <Section>
      <SkillsItem
        tooltip="HTML"
        src="https://deviconapi.vercel.app/html5?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="Javascript"
        src="https://deviconapi.vercel.app/javascript?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="Typescript"
        src="https://deviconapi.vercel.app/typescript?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="NodeJS"
        src="https://deviconapi.vercel.app/nodejs?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="React"
        src="https://deviconapi.vercel.app/react?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="NextJS"
        src="https://deviconapi.vercel.app/nextjs?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="Angular"
        src="https://deviconapi.vercel.app/angularjs?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="JQuery"
        src="https://deviconapi.vercel.app/jquery?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="MySQL"
        src="https://deviconapi.vercel.app/mysql?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="MongoDB"
        src="https://deviconapi.vercel.app/mongodb?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="SASS"
        src="https://deviconapi.vercel.app/sass?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="Git"
        src="https://deviconapi.vercel.app/git?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="GitHub"
        src="https://deviconapi.vercel.app/github?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="Photoshop"
        src="https://deviconapi.vercel.app/photoshop?theme=dark&size=30"
      />
      <SkillsItem
        tooltip="Illustrator"
        src="https://deviconapi.vercel.app/illustrator?theme=dark&size=30"
      />
    </Section>
  );
}
