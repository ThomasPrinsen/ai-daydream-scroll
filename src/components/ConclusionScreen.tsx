import React from 'react';
import { TimelineMoment } from '@/data/timelineData';
import { Clock, Calendar, Navigation, FileText, Salad, Users, ChefHat, LineChart } from 'lucide-react';

interface ConclusionScreenProps {
  choices: Record<number, string>;
  moments: TimelineMoment[];
  onReset: () => void;
}

const ConclusionScreen: React.FC<ConclusionScreenProps> = ({ choices, moments, onReset }) => {
  // Count AI choices
  const aiChoices = Object.values(choices).filter(
    choice => choice.toLowerCase().includes("ai") || choice.toLowerCase().includes("let")
  ).length;
  
  // Get user preference category
  const getUserPreference = () => {
    const humanChoices = moments.length - aiChoices;
    
    if (aiChoices > humanChoices + 2) {
      return {
        title: "Volledig omarmen van AI",
        description: "Je vindt het prima om AI veel dagelijkse beslissingen voor je te laten nemen, met focus op efficiëntie en optimalisatie."
      };
    } else if (aiChoices > humanChoices) {
      return {
        title: "Samenwerken met AI",
        description: "Je ziet AI als een hulpmiddel dat je leven kan verbeteren terwijl je nog steeds enige persoonlijke controle houdt."
      };
    } else if (humanChoices > aiChoices + 2) {
      return {
        title: "Onafhankelijkheid behouden",
        description: "Je geeft er de voorkeur aan om de meeste beslissingen zelf te nemen, met waarde voor menselijk oordeel en persoonlijke keuzes."
      };
    } else {
      return {
        title: "Balans tussen AI en menselijke keuze",
        description: "Je overweegt zorgvuldig waar AI waarde toevoegt versus waar menselijk oordeel belangrijker is."
      };
    }
  };

  // Get icon for each scene
  const getSceneIcon = (scene: string) => {
    switch (scene) {
      case "wake-up": return <Clock className="w-5 h-5 text-red-600" />;
      case "calendar": return <Calendar className="w-5 h-5 text-red-600" />;
      case "commuting": return <Navigation className="w-5 h-5 text-red-600" />;
      case "reading": return <FileText className="w-5 h-5 text-red-600" />;
      case "lunch": return <Salad className="w-5 h-5 text-red-600" />;
      case "meeting": return <Users className="w-5 h-5 text-red-600" />;
      case "dinner": return <ChefHat className="w-5 h-5 text-red-600" />;
      case "reflection": return <LineChart className="w-5 h-5 text-red-600" />;
      default: return <Clock className="w-5 h-5 text-red-600" />;
    }
  };

  const preference = getUserPreference();

  return (
    <div className="container-base">
      <div className="screen-content fade-in">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Jouw AI Relatie</h2>
        
        <div className="w-24 h-1 bg-red-400 mb-8"></div>
        
        <p className="text-xl mb-6 text-brabant-text">
          Op basis van jouw keuzes, geef je de voorkeur aan:
        </p>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8 border-red-400 border">
          <h3 className="text-xl font-bold text-red-600 mb-2">{preference.title}</h3>
          <p className="text-lg text-brabant-text">{preference.description}</p>
          
          <div className="mt-4 flex justify-center gap-2">
            <div className="px-3 py-1 rounded-full bg-red-600/10 text-red-600 text-sm font-medium">
              {aiChoices} AI keuzes
            </div>
            <div className="px-3 py-1 rounded-full bg-brabant-muted text-brabant-text text-sm font-medium">
              {moments.length - aiChoices} Menselijke keuzes
            </div>
          </div>
        </div>
        
        <h4 className="text-lg font-medium mb-4 text-brabant-text">Je keuzes samengevat:</h4>
        
        <div className="space-y-3">
          {moments.map((moment, index) => (
            <div key={index} className="choice-summary">
              <div className="choice-scene">
                {getSceneIcon(moment.scene)}
              </div>
              <div className="choice-text">
                <div className="text-xs text-brabant-text/70">{moment.time}</div>
                <div>{moment.question.split("?")[0]}?</div>
              </div>
              <div className="choice-answer">
                {choices[index] || "Geen keuze"}
              </div>
            </div>
          ))}
        </div>

        {/* CONCLUSION BLOCK */}
        <div style={{
          background: 'rgba(215,38,56,0.07)',
          borderRadius: '1rem',
          padding: '2rem 1.5rem',
          marginTop: '2.5rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
          color: '#991B1B',
          fontWeight: 500,
          fontSize: '1.15rem',
          boxShadow: '0 2px 12px rgba(215,38,56,0.06)',
        }}>
          <div style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1rem', color: '#D72638' }}>
            Jouw impact in één oogopslag
          </div>
          Door jouw keuzes heb je tijd bespaard – in totaal <b>[X]</b> minuten.<br />
          Je bent <b>[Y]</b> MB/GB aan data kwijtgeraakt aan derden.<br />
          Bovendien heb je heeft je ecologische voetafdruk ook impact gehad: jouw keuzes hebben gezorgd voor een <b>[Z]</b>% hogere digitale voetafdruk. 
        </div>
        
        <button
          onClick={onReset}
          className="button-primary"
        >
          Opnieuw Beginnen
        </button>
      </div>
    </div>
  );
};

export default ConclusionScreen;
