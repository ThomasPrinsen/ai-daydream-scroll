
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
      case "wake-up": return <Clock className="w-5 h-5 text-brabant-primary" />;
      case "calendar": return <Calendar className="w-5 h-5 text-brabant-primary" />;
      case "commuting": return <Navigation className="w-5 h-5 text-brabant-primary" />;
      case "reading": return <FileText className="w-5 h-5 text-brabant-primary" />;
      case "lunch": return <Salad className="w-5 h-5 text-brabant-primary" />;
      case "meeting": return <Users className="w-5 h-5 text-brabant-primary" />;
      case "dinner": return <ChefHat className="w-5 h-5 text-brabant-primary" />;
      case "reflection": return <LineChart className="w-5 h-5 text-brabant-primary" />;
      default: return <Clock className="w-5 h-5 text-brabant-primary" />;
    }
  };

  const preference = getUserPreference();

  return (
    <div className="container-base">
      <div className="screen-content fade-in">
        <h2 className="text-3xl font-bold mb-6 text-brabant-primary">Jouw AI Relatie</h2>
        
        <div className="w-24 h-1 bg-brabant-accent mb-8"></div>
        
        <p className="text-xl mb-6 text-brabant-text">
          Op basis van jouw keuzes, geef je de voorkeur aan:
        </p>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8 border-brabant-accent border">
          <h3 className="text-xl font-bold text-brabant-primary mb-2">{preference.title}</h3>
          <p className="text-lg text-brabant-text">{preference.description}</p>
          
          <div className="mt-4 flex justify-center gap-2">
            <div className="px-3 py-1 rounded-full bg-brabant-primary/10 text-brabant-primary text-sm font-medium">
              {aiChoices} AI keuzes
            </div>
            <div className="px-3 py-1 rounded-full bg-brabant-muted text-brabant-text text-sm font-medium">
              {moments.length - aiChoices} Menselijke keuzes
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-md mx-auto mb-8">
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
