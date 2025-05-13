import { useEffect, useState, useRef } from "react";
import { timelineMoments } from "@/data/timelineData";
import SceneIllustration from "@/components/SceneIllustration";
import IntroScreen from "@/components/IntroScreen";
import ConclusionScreen from "@/components/ConclusionScreen";

const Timeline = () => {
  const [currentMomentIndex, setCurrentMomentIndex] = useState(-1); // -1 for intro, 0-7 for moments, 8 for conclusion
  const [userChoices, setUserChoices] = useState<Record<number, string>>({});
  const [isScrolling, setIsScrolling] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
      // Center each card in the viewport
      const cardWidth = window.innerWidth * 0.5;
      const centerOffset = (window.innerWidth - cardWidth) / 2;
      const newPosition = -currentMomentIndex * cardWidth + centerOffset;

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
      {/* Progress indicator - moved outside the scroller and fixed at bottom center */}
      <div className="progress-indicator-fixed" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button
          onClick={() => setShowModal(true)}
          style={{
            background: 'none',
            border: '2px solid #D72638',
            color: '#D72638',
            borderRadius: '8px',
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: '0.75rem',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseOver={e => { e.currentTarget.style.background = '#D72638'; e.currentTarget.style.color = '#fff'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#D72638'; }}
        >
          Terug
        </button>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          {timelineMoments.map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`progress-dot ${
                dotIndex === currentMomentIndex ? "active" : ""
              } ${
                dotIndex < currentMomentIndex ? "completed" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
      {/* Custom modal for Terug button */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '18px',
            padding: '2.5rem 2rem 1.5rem 2rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            maxWidth: '90vw',
            width: '400px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <div style={{ fontSize: '1.15rem', color: '#991B1B', marginBottom: '2rem', fontWeight: 500 }}>
              Teruggaan is niet mogelijk.<br />Als je eenmaal een keuze in het echte leven hebt gemaakt, kan je ook niet meer terug!
            </div>
            <button
              onClick={() => setShowModal(false)}
              style={{
                background: '#D72638',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.6rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(215,38,56,0.08)',
                marginTop: '0.5rem',
                letterSpacing: '0.01em',
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
      {/* Timeline path with warm Brabant colors */}
      <div className="timeline-path"></div>
      <div
        ref={scrollerRef}
        className="timeline-scroller"
        style={{ width: `${timelineMoments.length * 50}vw` }}
      >
        {/* Timeline moments */}
        {timelineMoments.map((moment, index) => (
          <section key={index} className="timeline-moment">
            {/* Time indicator as a normal block at the top of the card */}
            <div className="time-indicator-static">{moment.time}</div>
            {/* Timeline node with Brabant styling */}
            <div
              className="timeline-node"
              style={{ left: `${index * 50}vw` }}
            >
              {index + 1}
            </div>
            <div className="moment-scene">
              <SceneIllustration scene={moment.scene} time={moment.time} />
            </div>
            <h2
              className="moment-question fade-in text-lg md:text-xl font-medium text-center mb-8 max-w-xl mx-auto"
              style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
            >
              {moment.question}
            </h2>
            <div className="moment-options">
              {moment.options.slice(0, 2).map((option, optIndex) => (
                <button
                  key={optIndex}
                  className={`moment-option fade-in whitespace-normal break-words max-w-xs text-base ${
                    userChoices[index] === option.text ? "selected" : ""
                  }`}
                  style={{
                    animationDelay: `${optIndex * 0.1}s`,
                    opacity: index === currentMomentIndex ? 1 : 0.5,
                    cursor: index === currentMomentIndex ? 'pointer' : 'not-allowed',
                    pointerEvents: index === currentMomentIndex ? 'auto' : 'none',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                  }}
                  onClick={() => handleOptionSelect(index, option.text)}
                  disabled={index !== currentMomentIndex}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          marginTop: '3.5rem',
          marginBottom: '0.5rem',
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#D72638', // red
          letterSpacing: '0.05em',
          background: 'transparent',
          fontFamily: 'Helvetica, sans-serif',
          lineHeight: 1.1,
        }}
      >
        Brabant 2027
      </div>
    </div>
  );
};

export default Timeline;
