import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="container-base">
      <div className="screen-content fade-in">
        <h1 className="text-4xl font-bold mb-6 text-red-600">Een dag met AI in 2027</h1>
        
        <div className="w-24 h-1 bg-red-400 mb-8"></div>
        
        <p className="text-xl mb-8 text-brabant-text">
          Stel, je bent een Brabander in 2027 en AI is een klein stapje verder. Van opstaan tot sporten, bij elk moment kies jij of je AI 
          gebruikt of niet. Ontdek hoe technologie jouw leven kan beïnvloeden.
        </p>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-brabant-muted mb-10">
          <p className="text-lg mb-6 text-brabant-text">
            De wereld verandert razendsnel. Maar wat betekent dat voor jou? Hoe ziet een gewone dag 
            eruit in 2027 als je kiest voor slimme technologie... of juist niet?
          </p>
          <p className="text-xl font-medium text-red-600">
            Ben jij klaar om te ontdekken hoe jouw wereld kan veranderen?  
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={onStart}
            className="button-primary"
          >
            Begin je dag
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
