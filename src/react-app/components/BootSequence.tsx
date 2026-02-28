import { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

interface BootSequenceProps {
  onComplete: () => void;
  isActive: boolean;
}

export default function BootSequence({ onComplete, isActive }: BootSequenceProps) {
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [completedLines, setCompletedLines] = useState<number[]>([]);

  const bootLines = [
    'Initializing temporal analytics engine...',
    'Loading cognitive transformation modules...',
    'Calibrating strategic insight algorithms...',
    'Syncing cross-dimensional metadata...',
    'System ready. Commencing year-end protocol.',
  ];

  useEffect(() => {
    if (!isActive) return;

    // Start first line immediately
    setCurrentLine(0);
  }, [isActive]);

  const handleLineComplete = (index: number) => {
    setCompletedLines(prev => [...prev, index]);
    
    if (index < bootLines.length - 1) {
      // Move to next line after brief pause
      setTimeout(() => {
        setCurrentLine(index + 1);
      }, 400);
    } else {
      // All lines complete
      setTimeout(onComplete, 1200);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">
          Boot Sequence
        </div>
      </div>
      
      <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 font-mono text-sm space-y-2">
        {bootLines.map((line, index) => (
          <div 
            key={index} 
            className={`text-gray-600 transition-opacity duration-300 ${
              completedLines.includes(index) || currentLine === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {currentLine === index && !completedLines.includes(index) ? (
              <TypewriterText 
                text={line} 
                speed={30}
                onComplete={() => handleLineComplete(index)}
              />
            ) : completedLines.includes(index) ? (
              line
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
