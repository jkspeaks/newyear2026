import { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

interface NeuralHandshakeProps {
  onComplete: () => void;
  isActive: boolean;
}

export default function NeuralHandshake({ onComplete, isActive }: NeuralHandshakeProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [showSignoff, setShowSignoff] = useState(false);

  const message = `Translation for organic neural networks: May your 2026 be filled with breakthroughs that defy conventional metrics, serendipitous discoveries that reshape your strategic landscape, and moments of profound clarity that transcend algorithmic prediction.`;

  const signoff = `Here's to optimizing for joy, maximizing for meaning, and deploying solutions that make the world unmistakably better.`;

  useEffect(() => {
    if (!isActive) return;

    setTimeout(() => setShowMessage(true), 400);
    setTimeout(() => setShowSignoff(true), 7000);
    setTimeout(onComplete, 11000);
  }, [isActive, onComplete]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">
          Neural Handshake Protocol
        </div>
      </div>

      <div className="border-l-2 border-gray-300 pl-6 space-y-6">
        {showMessage && (
          <div className="text-base leading-relaxed text-gray-700 font-light">
            <TypewriterText text={message} speed={25} />
          </div>
        )}

        {showSignoff && (
          <div className="text-base leading-relaxed text-gray-700 font-light pt-4 animate-fade-in">
            <TypewriterText text={signoff} speed={25} />
          </div>
        )}
      </div>

      {showSignoff && (
        <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in">
          <div className="font-mono text-xs text-gray-400">
            — Your Strategic Transformation Partner: Jayakumar (JK)
          </div>
          <div className="font-mono text-xs text-gray-300 mt-1">
            HAPPY NEW YEAR 2026
          </div>
        </div>
      )}
    </div>
  );
}
