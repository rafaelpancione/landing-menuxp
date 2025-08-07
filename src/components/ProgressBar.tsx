import React, { useState, useEffect } from 'react';

const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      if (progress >= 100 && !showBadge) {
        setShowBadge(true);
        setTimeout(() => setShowBadge(false), 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBadge]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-2 bg-black z-50">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {showBadge && (
        <div className="fixed top-8 right-4 z-50 animate-bounce">
          <div className="bg-[#FEBA0C] text-black px-6 py-3 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] font-bold">
            🎉 Missão Cumprida!
          </div>
        </div>
      )}
    </>
  );
};

export default ProgressBar;