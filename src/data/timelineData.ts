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
    question: "Je weet dat je een drukke dag voor de boeg hebt, maar hoe je je ochtend begint, ligt helemaal in jouw handen. ",
    options: [
      { text: "AI gebruiken door de ‘Slimme Ochtendassistent’ te activeren." },
      { text: "Je zet zelf de wekker uit, die je wekte met een hard piepend geluid, en opent de gordijnen." }
    ]
  },
  {
    time: "07:15",
    scene: "calendar",
    question: "Je staat voor je kledingkast en twijfelt. Je hebt niet veel tijd meer en je weet dat de eerste indruk telt.",
    options: [
      { text: "AI gebruiken door een slimme kledingkast-assistent te gebruiken." },
      { text: "Je kiest zelf een outfit: je vertrouwt op je eigen smaak en ervaring." }
    ]
  },
  {
    time: "08:00",
    scene: "commuting",
    question: "Je staat in de keuken en kijkt naar de koelkast. Je weet dat een goed ontbijt je dag kan maken of breken, zeker met een volle agenda voor de boeg. Maar wat kies je vandaag?",
    options: [
      { text: "AI gebruiken door een slimme voedingsassistent ontbijtopties te laten geven." },
      { text: "Je opent de koelkast en maakt op gevoel een keuze." }
    ]
  },
  {
    time: "08:30",
    scene: "reading",
    question: "Je staat voor de deur, je tas in de hand. Je weet dat je snel moet beslissen, want de tijd tikt door. Wat is de snelste manier om op je werk te komen zonder vertraging?",
    options: [
      { text: "Je pakt de auto en gebruikt AI voor de snelste route naar werk." },
      { text: "Je pakt het openbaar vervoer, en checkt de NS-zitplaatszoeker, die werkt door AI." }
    ]
  },
  {
    time: "13:30",
    scene: "lunch",
    question: "Je moet een formele mail schrijven aan een klant. Je hebt alleen 15 minuten tijd. Hoe gaat het verlopen?",
    options: [
      { text: "Je gebruikt AI om een mail te schrijven, om zeker te zijn dat de mail correct is en de juiste informatie bevat." },
      { text: "Je schrijft de mail zelf en gaat uit van je eigen kennis en ervaring." }
    ]
  },
  {
    time: "16:00",
    scene: "meeting",
    question: "Je hebt de ambitie om de marathon te lopen, maar je weet dat het veel voorbereiding vereist. Hoe pak je dit aan?",
    options: [
      { text: "Je geeft in AI je huidige fitnessniveau en laat AI een persoonlijk schema maken" },
      { text: "Je besluit een personal trainer in te huren die je persoonlijk kan begeleiden. De trainer maakt een schema op maat. " }
    ]
  },
  {
    time: "18:30",
    scene: "dinner",
    question: "Je staat in de keuken, staart naar de inhoud van je koelkast en twijfelt. Wat kun je maken van wat je hebt? Je hebt weinig zin om uren te kokerellen, maar je wilt wel iets gezonds en lekkers. ",
    options: [
      { text: "Je gebruikt AI door je koelkast te scannen." },
      { text: "Je besluit zelf de keukenprins uit te hangen en bladert door je kookboek." }
    ]
  },
  {
    time: "19:30",
    scene: "reflection",
    question: "Je zit de laatste tijd niet zo lekker in je vel. Je hebt een aantal mensen in je leven die je kunnen helpen, maar je hebt er geen zin in om te praten. Wat doet je?",
    options: [
      { text: "Je gebruikt AI om een slimme coach te activeren." },
      { text: "Je boekt een afspraak bij een psycholoog." }
    ]
  },
  {
    time: "20:00",
    scene: "reflection",
    question: "Je zit met je partner op de bank. Het is zaterdagavond en jullie willen iets leuks doen, maar hebben geen zin om alles zelf uit te zoeken.",
    options: [
      { text: "Je gebruikt AI om een hele planning van de avond te maken." },
      { text: "Go with the flow! Je besluit zelf de avond te plannen." }
    ]
  },
  {
    time: "21:30",
    scene: "reflection",
    question: "Je kruipt onder de dekens en weet: dit wordt een fijne nacht... tenminste, voor één van jullie.",
    options: [
      { text: "Je gebruikt een AI-geïntegreerd kussen, die zich aanpast aan je slaaphouding en ervoor zorgt dat je minder snurkt" },
      { text: "Je gebruikt een normaal kussen en hoopt dat je ‘s nachts niet te veel wordt wakker gemaakt door je partner." }
    ]
  }
];
