
import { useEffect, useState, useRef } from "react";
import { timelineMoments } from "@/data/timelineData";
import SceneIllustration from "@/components/SceneIllustration";
import IntroScreen from "@/components/IntroScreen";
import ConclusionScreen from "@/components/ConclusionScreen";

const Timeline = () => {
  const [currentMomentIndex, setCurrentMomentIndex] = useState(-1); // -1 for intro, 0-7 for moments, 8 for conclusion
  const [userChoices, setUserChoices] = useState<Record<number, string>>({});
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
      if (Math.abs(e.deltaY) < 20) return;
      
      if (e.deltaY > 0) {
        // Scrolling forward
        if (currentMomentIndex < timelineMoments.length) {
          // Don't advance if current moment has no choice and it's not the intro
          if (currentMomentIndex >= 0 && !userChoices[currentMomentIndex]) {
            return;
          }
          
          // Set scrolling flag to prevent multiple scroll events
          setIsScrolling(true);
          setCurrentMomentIndex((prev) => prev + 1);
        }
      } else if (e.deltaY < 0 && currentMomentIndex > -1) {
        // Scrolling backward is always allowed
        setIsScrolling(true);
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
  }, [currentMomentIndex, userChoices, isScrolling]);

  // Update scroll position based on current moment index with snap effect
  useEffect(() => {
    if (scrollerRef.current && currentMomentIndex >= 0 && currentMomentIndex < timelineMoments.length) {
      // Use tighter width multiplier for closer spacing between moments
      const newPosition = -currentMomentIndex * (window.innerWidth * 0.5); // Reduced from 0.7 to 0.5
      
      // Apply smooth transition with easing for a snappy effect
      scrollerRef.current.style.transition = "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
      scrollerRef.current.style.transform = `translateX(${newPosition}px)`;
      
      // Clear the scrolling flag after animation completes
      const timer = setTimeout(() => {
        setIsScrolling(false);
        if (scrollerRef.current) {
          scrollerRef.current.style.transition = "";
        }
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [currentMomentIndex]);

  // Handle option selection
  const handleOptionSelect = (momentIndex: number, option: string) => {
    setUserChoices((prev) => ({ ...prev, [momentIndex]: option }));
    
    // Automatically advance to next moment after a short delay
    setTimeout(() => {
      setCurrentMomentIndex((prev) => prev + 1);
    }, 700);
  };

  // Start the journey
  const startJourney = () => {
    setCurrentMomentIndex(0);
  };

  // Reset the journey
  const resetJourney = () => {
    setCurrentMomentIndex(-1);
    setUserChoices({});
  };

  // Show intro screen
  if (currentMomentIndex === -1) {
    return <IntroScreen onStart={startJourney} />;
  }

  // Show conclusion screen
  if (currentMomentIndex >= timelineMoments.length) {
    return <ConclusionScreen choices={userChoices} moments={timelineMoments} onReset={resetJourney} />;
  }

  return (
    <div ref={containerRef} className="timeline-container">
      {/* Progress indicator */}
      <div className="timeline-progress">
        <div 
          className="timeline-progress-bar" 
          style={{ width: `${((currentMomentIndex + 1) / timelineMoments.length) * 100}%` }}
        ></div>
      </div>
      
      {/* Timeline path with warm Brabant colors */}
      <div className="timeline-path"></div>
      
      <div ref={scrollerRef} className="timeline-scroller">
        {/* Timeline moments */}
        {timelineMoments.map((moment, index) => (
          <section key={index} className="timeline-moment">
            <div className="time-indicator">{moment.time}</div>
            
            {/* Timeline node with Brabant styling */}
            <div
              className="timeline-node"
              style={{ left: `${index * 50}vw` }} // Tighter spacing (reduced from 70vw to 50vw)
            >
              {index + 1}
            </div>
            
            <div className="moment-scene">
              <SceneIllustration scene={moment.scene} />
            </div>
            
            <h2 className="moment-question fade-in">{moment.question}</h2>
            
            <div className="moment-options">
              {moment.options.slice(0, 2).map((option, optIndex) => (
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
      </div>
    </div>
  );
};

export default Timeline;
