
import { useEffect, useState, useRef } from "react";
import { timelineMoments } from "@/data/timelineData";
import SceneIllustration from "@/components/SceneIllustration";

const Timeline = () => {
  const [currentMomentIndex, setCurrentMomentIndex] = useState(0);
  const [userChoices, setUserChoices] = useState<Record<number, string>>({});
  const [locked, setLocked] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll functionality
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
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
        
        // Advancing to next moment
        if (currentMomentIndex < timelineMoments.length + 1) {
          setCurrentMomentIndex((prev) => prev + 1);
        }
      } else if (e.deltaY < 0 && currentMomentIndex > 0) {
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
  }, [currentMomentIndex, userChoices, locked]);

  // Update scroll position based on current moment index
  useEffect(() => {
    if (scrollerRef.current) {
      const newPosition = -currentMomentIndex * window.innerWidth;
      scrollerRef.current.style.transform = `translateX(${newPosition}px)`;
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
      <div className="timeline-path"></div>
      
      <div ref={scrollerRef} className="timeline-scroller">
        {/* Intro section */}
        <section className="timeline-moment">
          <div className="max-w-2xl mx-auto text-center fade-in">
            <h1 className="text-4xl font-bold mb-6 text-blue-600">A Day with AI in 2027</h1>
            <p className="text-xl mb-8">
              How much of your daily life would you entrust to artificial intelligence?
            </p>
            <div className="mb-12">
              <p className="text-lg mb-4">
                Journey through a day in the near future and decide at each moment:
              </p>
              <p className="text-xl font-medium text-blue-600">
                Would you let AI decide this for you — or do you prefer to choose yourself?
              </p>
            </div>
            <button
              onClick={() => setCurrentMomentIndex(1)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Start Your Day
            </button>
          </div>
        </section>
        
        {/* Timeline moments */}
        {timelineMoments.map((moment, index) => (
          <section key={index} className="timeline-moment">
            <div className="time-indicator">{moment.time}</div>
            
            {/* Timeline node */}
            <div
              className="timeline-node"
              style={{ left: `${(index + 1) * 100}vw` }}
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
                  }`}
                ></div>
              ))}
            </div>
          </section>
        ))}
        
        {/* Conclusion section */}
        <section className="timeline-moment">
          <div className="max-w-2xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Your AI Relationship</h2>
            
            {Object.keys(userChoices).length === timelineMoments.length ? (
              <>
                <p className="text-xl mb-6">
                  Based on your choices, you prefer to:
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  {(() => {
                    const aiChoices = Object.values(userChoices).filter(
                      choice => choice.toLowerCase().includes("ai") || choice.toLowerCase().includes("let")
                    ).length;
                    const humanChoices = timelineMoments.length - aiChoices;
                    
                    if (aiChoices > humanChoices + 2) {
                      return (
                        <p className="text-lg">
                          <span className="font-bold text-blue-600">Embrace AI fully</span> - You're comfortable letting AI make many daily decisions for you, valuing efficiency and optimization.
                        </p>
                      );
                    } else if (aiChoices > humanChoices) {
                      return (
                        <p className="text-lg">
                          <span className="font-bold text-blue-600">Partner with AI</span> - You see AI as a collaborative tool that can enhance your life while still maintaining some personal control.
                        </p>
                      );
                    } else if (humanChoices > aiChoices + 2) {
                      return (
                        <p className="text-lg">
                          <span className="font-bold text-blue-600">Maintain independence</span> - You prefer to make most decisions yourself, valuing human judgment and personal agency.
                        </p>
                      );
                    } else {
                      return (
                        <p className="text-lg">
                          <span className="font-bold text-blue-600">Balance AI and human choice</span> - You carefully consider where AI adds value versus where human judgment is more important.
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
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Start Over
                </button>
              </>
            ) : (
              <p className="text-xl">
                Complete all moments to see your AI relationship profile.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
