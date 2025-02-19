import { styled } from '../../../stiches.config';
import Card from './Card';

const Container = styled('div', {
  display: 'flex',
  gap: 20,
  justifyContent: 'center',
  flexFlow: 'wrap',

  marginTop: 70,
  padding: '25px 0px',

  pointerEvents: 'none',

  '@desktop': {
    '&:hover div': {
      filter: 'blur(2px) grayscale(1)',
    },
  },
});

export default function CardContainer() {
  const cards = [
    { name: 'ROVÉR REDOVISNING', image: 'images/portfolio/rover-redovisning.png', url: 'https://roverredovisning.se/', github: 'https://github.com/MalcolmDahling/rover_redovisning' },
    { name: 'ISAK DAHLING MUSIC', image: 'images/portfolio/isak_dahling_music.png', url: 'https://isak-dahling-music.vercel.app/', github: 'https://github.com/MalcolmDahling/isak_dahling_music' },
    { name: 'MARKNADSKOLLEN', image: 'images/portfolio/marknadskollen.png', url: 'https://marknadskollen.vercel.app/' },
    //{ name: 'GAMLA CV:T', image: 'images/portfolio/cv-react.png', url: 'https://malcolmdahling.github.io/cv_react/', github: 'https://github.com/MalcolmDahling/cv_react' },
  ];

  return (
    <Container>
      {cards.map((card) => (
        <Card
          {...card}
          key={card.name}
        ></Card>
      ))}
    </Container>
  );
}
