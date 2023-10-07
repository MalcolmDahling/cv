import { SelectedNavItem } from '@/atoms/SelectedNavItem';
import { useRecoilValue } from 'recoil';
import { styled } from '../../../stiches.config';
import { useEffect, useState } from 'react';

const Container = styled('div', {
  position: 'relative',
});

const P = styled('p', {
  maxWidth: 768,
  minHeight: 425,

  transition: 'all 500ms',

  '@tablet': {
    padding: '$1',
  },

  variants: {
    show: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
        filter: 'blur(6px)',
      },
    },
  },
});

export default function Content() {
  const selectedNavItem = useRecoilValue(SelectedNavItem);
  const [selectedItemAfterAnim, setSelectedItemAfterAnim] = useState(0);
  const [show, setShow] = useState(true);
  const [enableAnim, setEnableAnim] = useState(false);

  const content = [
    //PROFIL
    <span>Jag är en uppfinningsrik och kreativ person som lär sig snabbt och gärna tar mig an utmanande uppgifter där man får tänka lite. Mitt arbete kan ske efter instruktion eller med större frihet i uppgifter där det krävs. Jag kan jobba självständigt eller i grupp och tar gärna emot konstruktiv kritik för att förbättra mitt arbete. Problemlösning är även det en av mina starka sidor och jag hoppar gärna in och hjälper andra vid behov. I framtiden vill jag gärna se mig själv i en roll inom programmering och webbutveckling.</span>,

    //UTBILDNING
    <span>
      Jag har en Frontend Developer-examen från Medieinstitutet Yrkeshögskola (2021-2023).
      <br />
      <br />
      Kurser som ingick i programmet:
      <br />
      HTML/CSS, 20 yhp.
      <br />
      Javascript, grundkurs, 40 yhp.
      <br />
      Javascript, fördjupning, 60 yhp.
      <br />
      Kompetensportfölj och entreprenörskap, 10 yhp.
      <br />
      Arbetsmetodik för utvecklare, 20 yhp.
      <br />
      Arbeta med projekt i agila metoder, 15 yhp.
      <br />
      Dynamisk webbutveckling, 45 yhp.
      <br />
      Grafiska verktyg för gränssnittsdesign, 15 yhp.
      <br />
      LIA 1, 50 yhp.
      <br />
      LIA 2, 80 yhp.
      <br />
      UX/Usability, 15 yhp.
      <br />
      Examensarbete, 30 yhp.
      <br />
    </span>,

    //PROGRAMMERING
    <span>
      HTML, CSS, Javascript, Typescript, NodeJS, NextJS, JQuery, Angular, MongoDB, Sass, Git.
      <br />
      <br />
      Har även grundläggande kunskaper inom C#, C++, PHP och SQL.
    </span>,

    //KOMPETENSOMRÅDEN
    <span>Mina ansvarsområden har varit allt ifrån programmering, grafisk design, webbutveckling och lödning till mer praktiska uppgifter som montering av kontorsmöbler och installation av elektrisk utrustning och datorer. Jag har också varit med och skapat en utställning på Sydostasiatiskamuséet där jag ansvarade för den tekniska delen med TV-apparater, datorer och nätverk.</span>,

    //PRAKTIK
    <span>
      Frontendutvecklare - Kruso Digital, 10 veckor (LIA 1)
      <br />
      Frontendutvecklare - Kruso Digital, 16 veckor (LIA 2)
      <br />
      Lödare och programmerare - LATAB
      <br />
      Installatör och programmerare - Service Databörsen AB
      <br />
    </span>,

    //ÖVRIGT
    <span>
      B-körkort.
      <br />
      Svenska som modersmål.
      <br />
      Engelska, flytande i tal och skrift.
      <br />
      På fritiden så gillar jag att styrketräna, cykla, och att spela biljard, schack och datorspel.
    </span>,

    //PORTFOLIO
    <span></span>,
  ];

  useEffect(() => {
    if (enableAnim) {
      setShow(false);

      setTimeout(() => {
        setSelectedItemAfterAnim(selectedNavItem);
        setShow(true);
      }, 600);
    }

    setEnableAnim(true);
  }, [selectedNavItem]);

  return (
    <Container>
      <P show={show}>{content[selectedItemAfterAnim]}</P>
    </Container>
  );
}
