export interface TimelineMoment {
  time: string;
  scene: string;
  question: string;
  options: { text: string }[];
}

export const timelineMoments: TimelineMoment[] = [
  {
    time: "07:00",
    scene: "wake-up",
    question: "Zou je AI je outfit laten kiezen op basis van je dagschema en het weer?",
    options: [
      { text: "Laat AI mijn outfit voorstellen" },
      { text: "Ik kies mijn eigen kleren" }
    ]
  },
  {
    time: "08:15",
    scene: "calendar",
    question: "Zou je AI je schema laten herschikken voor maximale efficiëntie vandaag?",
    options: [
      { text: "Laat AI mijn schema optimaliseren" },
      { text: "Ik beheer mijn eigen tijd" }
    ]
  },
  {
    time: "09:00",
    scene: "commuting",
    question: "Zou je AI de snelste, groenste route voor je woon-werkverkeer laten kiezen?",
    options: [
      { text: "Laat AI mijn route plannen" },
      { text: "Ik bepaal mijn eigen route" }
    ]
  },
  {
    time: "11:00",
    scene: "reading",
    question: "Zou je AI een beleidsdocument laten samenvatten en de belangrijkste risico's laten markeren?",
    options: [
      { text: "Laat AI het document analyseren" },
      { text: "Ik lees het liever zelf" }
    ]
  },
  {
    time: "13:00",
    scene: "lunch",
    question: "Zou je AI lunch laten aanbevelen op basis van je gezondheidsdoelen en middagafspraken?",
    options: [
      { text: "Laat AI mijn maaltijd kiezen" },
      { text: "Ik bepaal zelf wat ik eet" }
    ]
  },
  {
    time: "16:00",
    scene: "meeting",
    question: "Zou je AI gespreks­punten laten voorstellen op basis van je aankomende gast?",
    options: [
      { text: "Laat AI mijn gespreks­punten voorbereiden" },
      { text: "Ik bereid het zelf voor" }
    ]
  },
  {
    time: "18:30",
    scene: "dinner",
    question: "Zou je AI je diner laten plannen en bezorgen?",
    options: [
      { text: "Laat AI het diner bestellen" },
      { text: "Ik kook of bestel zelf" }
    ]
  },
  {
    time: "21:30",
    scene: "reflection",
    question: "Zou je AI je dag laten evalueren en verbeteringen voor morgen laten voorstellen?",
    options: [
      { text: "Laat AI mijn dag analyseren" },
      { text: "Ik reflecteer liever zelf" }
    ]
  }
];
