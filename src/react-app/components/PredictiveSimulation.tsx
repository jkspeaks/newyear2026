import { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

interface PredictiveSimulationProps {
  onComplete: () => void;
  isActive: boolean;
}

export default function PredictiveSimulation({ onComplete, isActive }: PredictiveSimulationProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const message = `Our proprietary ensemble models—leveraging gradient-boosted decision trees, recurrent neural architectures, and Monte Carlo simulations—project a high-confidence scenario for 2026: a convergence of breakthrough innovations, exponential capability expansion, and unprecedented value creation across all verticals. The algorithm suggests this temporal juncture represents an inflection point in your transformation journey.`;

  useEffect(() => {
    if (!isActive) return;

    setTimeout(() => setShowMessage(true), 400);
    setTimeout(() => setShowAnalysis(true), 8000);
    setTimeout(onComplete, 9500);
  }, [isActive, onComplete]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-2 h-2 rounded-full ${showAnalysis ? 'bg-gray-400' : 'bg-indigo-500 animate-pulse'}`}></div>
        <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">
          Predictive Simulation Engine
        </div>
      </div>

      <div className="border border-gray-300 rounded-sm p-8 bg-gradient-to-br from-white to-gray-50">
        {showMessage && (
          <div className="text-base leading-relaxed text-gray-700 font-light">
            <TypewriterText text={message} speed={25} />
          </div>
        )}
      </div>

      {showAnalysis && (
        <div className="grid grid-cols-3 gap-4 animate-fade-in">
          <div className="text-center p-4 border border-gray-200 rounded-sm">
            <div className="font-mono text-2xl font-light mb-1">94.7%</div>
            <div className="font-mono text-xs text-gray-500">Confidence Interval</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-sm">
            <div className="font-mono text-2xl font-light mb-1">∞</div>
            <div className="font-mono text-xs text-gray-500">Potential Uplift</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-sm">
            <div className="font-mono text-2xl font-light mb-1">12.5x</div>
            <div className="font-mono text-xs text-gray-500">Impact Multiplier</div>
          </div>
        </div>
      )}
    </div>
  );
}
