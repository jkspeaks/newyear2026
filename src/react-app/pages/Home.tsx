import { useState, useEffect } from 'react';
import BootSequence from '@/react-app/components/BootSequence';
import YearEndArchive from '@/react-app/components/YearEndArchive';
import ParameterInjection from '@/react-app/components/ParameterInjection';
import PredictiveSimulation from '@/react-app/components/PredictiveSimulation';
import NeuralHandshake from '@/react-app/components/NeuralHandshake';
import DownloadButton from '@/react-app/components/DownloadButton';

export default function HomePage() {
  const [stage, setStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Load IBM Plex Mono and Inter fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleStageComplete = (nextStage: number) => {
    if (nextStage >= 5) {
      setIsComplete(true);
    } else {
      setTimeout(() => setStage(nextStage), 800);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-gray-300">
          <div className="font-mono text-xs text-gray-500 mb-2">SYSTEM v2.0.2.6</div>
          <h1 className="text-2xl font-light tracking-tight">Temporal Transition Protocol</h1>
        </div>

        {/* Stage Components */}
        <div className="space-y-12">
          {stage >= 0 && (
            <BootSequence 
              onComplete={() => handleStageComplete(1)}
              isActive={stage === 0}
            />
          )}
          
          {stage >= 1 && (
            <YearEndArchive 
              onComplete={() => handleStageComplete(2)}
              isActive={stage === 1}
            />
          )}
          
          {stage >= 2 && (
            <ParameterInjection 
              onComplete={() => handleStageComplete(3)}
              isActive={stage === 2}
            />
          )}
          
          {stage >= 3 && (
            <PredictiveSimulation 
              onComplete={() => handleStageComplete(4)}
              isActive={stage === 3}
            />
          )}
          
          {stage >= 4 && (
            <NeuralHandshake 
              onComplete={() => handleStageComplete(5)}
              isActive={stage === 4}
            />
          )}
        </div>

        {/* Download Button */}
        {isComplete && (
          <div className="mt-16 pt-8 border-t border-gray-300 animate-fade-in">
            <DownloadButton />
          </div>
        )}

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-200">
          <div className="font-mono text-xs text-gray-400 text-center">
            © 2026 Strategic Foresight Division • All projections probabilistic
          </div>
        </div>
      </div>
    </div>
  );
}
