
import { useEffect, useState, useRef } from "react";
import { timelineMoments } from "@/data/timelineData";
import SceneIllustration from "@/components/SceneIllustration";

const Timeline = () => {
  const [currentMomentIndex, setCurrentMomentIndex] = useState(0);
  const [userChoices, setUserChoices] = useState<Record<number, string>>({});
  const [locked, setLocked] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll functionality with improved behavior
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Don't respond to wheel events during a scroll animation
      if (isScrolling) return;
      
      // Make scrolling less sensitive
      if (Math.abs(e.deltaY) < 15) return;
      
      if (e.deltaY > 0 && currentMomentIndex < timelineMoments.length + 1) {
        // Don't advance if current moment has no choice and it's not the intro or conclusion
        if (
          currentMomentIndex > 0 && 
          currentMomentIndex <= timelineMoments.length && 
          !userChoices[currentMomentIndex - 1] && 
          locked
        ) {
          return;
        }
        
        // Set scrolling flag to prevent multiple scroll events
        setIsScrolling(true);
        
        // Advancing to next moment
        if (currentMomentIndex < timelineMoments.length + 1) {
          setCurrentMomentIndex((prev) => prev + 1);
        }
      } else if (e.deltaY < 0 && currentMomentIndex > 0) {
        // Set scrolling flag to prevent multiple scroll events
        setIsScrolling(true);
        
        // Scrolling backward is always allowed
        setCurrentMomentIndex((prev) => prev - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentMomentIndex, userChoices, locked, isScrolling]);

  // Update scroll position based on current moment index with smooth easing
  useEffect(() => {
    if (scrollerRef.current) {
      // Use smaller width multiplier for tighter spacing between moments
      const newPosition = -currentMomentIndex * (window.innerWidth * 0.7);
      
      // Apply smooth transition with easing
      scrollerRef.current.style.transition = "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)";
      scrollerRef.current.style.transform = `translateX(${newPosition}px)`;
      
      // Clear the scrolling flag after animation completes
      const timer = setTimeout(() => {
        setIsScrolling(false);
        if (scrollerRef.current) {
          scrollerRef.current.style.transition = "";
        }
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [currentMomentIndex]);

  // Handle option selection
  const handleOptionSelect = (momentIndex: number, option: string) => {
    setUserChoices((prev) => ({ ...prev, [momentIndex]: option }));
    
    // Automatically advance to next moment after a short delay
    setTimeout(() => {
      if (currentMomentIndex < timelineMoments.length + 1) {
        setCurrentMomentIndex((prev) => prev + 1);
      }
    }, 700);
  };

  // Toggle lock to allow/prevent advancing without selection
  const toggleLock = () => {
    setLocked((prev) => !prev);
  };

  return (
    <div ref={containerRef} className="timeline-container">
      {/* Progress indicator */}
      <div className="timeline-progress">
        <div 
          className="timeline-progress-bar" 
          style={{ width: `${(currentMomentIndex / (timelineMoments.length + 1)) * 100}%` }}
        ></div>
      </div>
      
      {/* Timeline path with warm Brabant colors */}
      <div className="timeline-path"></div>
      
      <div ref={scrollerRef} className="timeline-scroller">
        {/* Intro section */}
        <section className="timeline-moment">
          <div className="max-w-2xl mx-auto text-center fade-in">
            <h1 className="text-4xl font-bold mb-6 text-brabant-primary">Een Dag met AI in 2027</h1>
            <p className="text-xl mb-8 text-brabant-text">
              Hoeveel van je dagelijks leven zou je toevertrouwen aan kunstmatige intelligentie?
            </p>
            <div className="mb-12">
              <p className="text-lg mb-4 text-brabant-text">
                Reis door een dag in de nabije toekomst en beslis op elk moment:
              </p>
              <p className="text-xl font-medium text-brabant-primary">
                Zou jij AI hierover laten beslissen — of houd je liever zelf de regie?
              </p>
            </div>
            <button
              onClick={() => setCurrentMomentIndex(1)}
              className="px-8 py-3 bg-brabant-primary text-white rounded-lg hover:bg-brabant-primary-dark transition-all"
            >
              Begin Je Dag
            </button>
          </div>
        </section>
        
        {/* Timeline moments */}
        {timelineMoments.map((moment, index) => (
          <section key={index} className="timeline-moment">
            <div className="time-indicator">{moment.time}</div>
            
            {/* Timeline node with Brabant styling */}
            <div
              className="timeline-node"
              style={{ left: `${(index + 1) * 70}vw` }} // Tighter spacing
            >
              {index + 1}
            </div>
            
            <div className="moment-scene">
              <SceneIllustration scene={moment.scene} />
            </div>
            
            <h2 className="moment-question fade-in">{moment.question}</h2>
            
            <div className="moment-options">
              {moment.options.map((option, optIndex) => (
                <button
                  key={optIndex}
                  className={`moment-option fade-in ${
                    userChoices[index] === option.text ? "selected" : ""
                  }`}
                  style={{ animationDelay: `${optIndex * 0.1}s` }}
                  onClick={() => handleOptionSelect(index, option.text)}
                >
                  {option.text}
                </button>
              ))}
            </div>
            
            <div className="progress-indicator">
              {timelineMoments.map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`progress-dot ${
                    dotIndex === index ? "active" : ""
                  } ${
                    dotIndex < index ? "completed" : ""
                  }`}
                ></div>
              ))}
            </div>
          </section>
        ))}
        
        {/* Conclusion section */}
        <section className="timeline-moment">
          <div className="max-w-2xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-bold mb-6 text-brabant-primary">Jouw AI Relatie</h2>
            
            {Object.keys(userChoices).length === timelineMoments.length ? (
              <>
                <p className="text-xl mb-6 text-brabant-text">
                  Op basis van jouw keuzes, geef je de voorkeur aan:
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md mb-8 border-brabant-accent border">
                  {(() => {
                    const aiChoices = Object.values(userChoices).filter(
                      choice => choice.toLowerCase().includes("ai") || choice.toLowerCase().includes("let")
                    ).length;
                    const humanChoices = timelineMoments.length - aiChoices;
                    
                    if (aiChoices > humanChoices + 2) {
                      return (
                        <p className="text-lg">
                          <span className="font-bold text-brabant-primary">Volledig omarmen van AI</span> - Je vindt het prima om AI veel dagelijkse beslissingen voor je te laten nemen, met focus op efficiëntie en optimalisatie.
                        </p>
                      );
                    } else if (aiChoices > humanChoices) {
                      return (
                        <p className="text-lg">
                          <span className="font-bold text-brabant-primary">Samenwerken met AI</span> - Je ziet AI als een hulpmiddel dat je leven kan verbeteren terwijl je nog steeds enige persoonlijke controle houdt.
                        </p>
                      );
                    } else if (humanChoices > aiChoices + 2) {
                      return (
                        <p className="text-lg">
                          <span className="font-bold text-brabant-primary">Onafhankelijkheid behouden</span> - Je geeft er de voorkeur aan om de meeste beslissingen zelf te nemen, met waarde voor menselijk oordeel en persoonlijke keuzes.
                        </p>
                      );
                    } else {
                      return (
                        <p className="text-lg">
                          <span className="font-bold text-brabant-primary">Balans tussen AI en menselijke keuze</span> - Je overweegt zorgvuldig waar AI waarde toevoegt versus waar menselijk oordeel belangrijker is.
                        </p>
                      );
                    }
                  })()}
                </div>
                <button
                  onClick={() => {
                    setCurrentMomentIndex(0);
                    setUserChoices({});
                  }}
                  className="px-8 py-3 bg-brabant-primary text-white rounded-lg hover:bg-brabant-primary-dark transition-all"
                >
                  Opnieuw Beginnen
                </button>
              </>
            ) : (
              <p className="text-xl text-brabant-text">
                Maak alle momenten af om je AI-relatieprofiel te bekijken.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
