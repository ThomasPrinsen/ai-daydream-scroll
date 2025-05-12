
import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="container-base">
      <div className="screen-content fade-in">
        <h1 className="text-4xl font-bold mb-6 text-brabant-primary">Een Dag met AI in 2027</h1>
        
        <div className="w-24 h-1 bg-brabant-accent mb-8"></div>
        
        <p className="text-xl mb-8 text-brabant-text">
          Hoeveel van je dagelijks leven zou je toevertrouwen aan kunstmatige intelligentie?
        </p>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-brabant-muted mb-10">
          <p className="text-lg mb-6 text-brabant-text">
            Reis door een dag in de nabije toekomst en beslis op elk moment:
          </p>
          <p className="text-xl font-medium text-brabant-primary">
            Zou jij AI hierover laten beslissen — of houd je liever zelf de regie?
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={onStart}
            className="button-primary"
          >
            Begin Je Dag
          </button>
          
          <p className="text-sm text-brabant-text/60">
            Scroll door je dag met het muiswiel of trackpad
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
