import { SelectedNavItem } from "@/atoms/SelectedNavItem";
import { useRecoilValue } from "recoil";
import { styled } from "../../../stiches.config";
import { useEffect, useState } from "react";

const P = styled('p', {

    position:'relative',
    maxWidth:768,
    marginTop:35,

    transition:'all 500ms',

    '@tablet':{
        padding:'$1',
    },

    variants:{
        show:{
            true:{
                opacity:1
            },
            false:{
                opacity:0,
                filter:'blur(6px)'
            }
        }
    }
});

export default function Content(){

    const selectedNavItem = useRecoilValue(SelectedNavItem);
    const [selectedItemAfterAnim, setSelectedItemAfterAnim] = useState(0);
    const [show, setShow] = useState(true);
    const [enableAnim, setEnableAnim] = useState(false);

    const content = [
        <span>Jag är en uppfinningsrik och kreativ person som lär sig snabbt och gärna tar mig an utmanande uppgifter där man får tänka lite.
        Mitt arbete kan ske efter instruktion eller med större frihet i uppgifter där det krävs.
        Jag kan jobba självständigt eller i grupp och tar gärna emot konstruktiv kritik för att förbättra mitt arbete.
        Problemlösning är även det en av mina starka sidor och jag hoppar gärna in och hjälper andra vid behov.
        I framtiden vill jag gärna se mig själv i en roll inom teknik eller programmering och webbutveckling.</span>,

        <span>Jag har en Frontend Developer-examen från Medieinstitutet Yrkeshögskola.
        Kurser som ingår i programmet: HTML/CSS, 20 yhp. Javascript, grundkurs, 40 yhp. Javascript, fördjupning, 60 yhp.
        Kompetensportfölj och entreprenörskap, 10 yhp. Arbetsmetodik för utvecklare, 20 yhp. Arbeta med projekt i agila metoder, 15 yhp.
        Dynamisk webbutveckling, 45 yhp. Grafiska verktyg för gränssnittsdesign, 15 yhp. LIA 1, 50 yhp. LIA 2, 80 yhp. UX/Usability, 15 yhp. Examensarbete, 30 yhp.</span>,

        <span>Kunnig inom HTML, CSS och Javascript (vanilla, React, Angular, Typescript och Node), även grundläggande kunskaper inom C#, C++, PHP och SQL.</span>,

        <span>Mina ansvarsområden har varit allt ifrån programmering, grafisk design, webbutveckling och lödning till mer praktiska uppgifter som montering av 
        kontorsmöbler och installation av elektrisk utrustning och datorer.
        Jag har också varigt med och skapat en utställning på Sydostasiatiskamuséet där jag ansvarade för den tekniska delen med TV-apparater, datorer och nätverk.</span>,

        <span>Lödare och programmerare - LATAB<br/>
        Installatör och programmerare - Service Databörsen AB<br/>
        Mångsysslare - Spånga Badminton och Bollcenter</span>,

        <span>Svenska som modersmål.<br/>
        Engelska, flytande.</span>,

        <span>B-körkort.<br/>
        På fritiden så gillar jag att styrketräna, cykla, och att spela biljard, schack och datorspel.</span>
    ];

    useEffect(() => {

        if(enableAnim){

            setShow(false);

            setTimeout(() => {

                setSelectedItemAfterAnim(selectedNavItem);
                setShow(true);
            }, 600);
        }

        setEnableAnim(true);

    }, [selectedNavItem]);

    return(
        <P show={show}>
            {content[selectedItemAfterAnim]}
        </P>
    );
}