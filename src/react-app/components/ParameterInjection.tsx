import { useState, useEffect } from 'react';
import { TrendingUp, Zap, Target } from 'lucide-react';

interface ParameterInjectionProps {
  onComplete: () => void;
  isActive: boolean;
}

export default function ParameterInjection({ onComplete, isActive }: ParameterInjectionProps) {
  const [loadedParams, setLoadedParams] = useState<number>(0);

  const parameters = [
    { icon: TrendingUp, key: 'growth_multiplier', value: '∞', unit: 'exponential' },
    { icon: Zap, key: 'innovation_velocity', value: '2026', unit: 'ms⁻¹' },
    { icon: Target, key: 'strategic_alignment', value: '99.9', unit: '%' },
  ];

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setLoadedParams(prev => {
        if (prev >= parameters.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 1200);
          return prev;
        }
        return prev + 1;
      });
    }, 700);

    return () => clearInterval(interval);
  }, [isActive, onComplete]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-2 h-2 rounded-full ${loadedParams >= parameters.length - 1 ? 'bg-gray-400' : 'bg-purple-500 animate-pulse'}`}></div>
        <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">
          Parameter Injection Module
        </div>
      </div>

      <div className="border border-gray-300 rounded-sm divide-y divide-gray-200">
        {parameters.map((param, index) => {
          const Icon = param.icon;
          const isLoaded = loadedParams >= index;
          
          return (
            <div
              key={index}
              className={`p-5 flex items-center justify-between transition-all duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div className="flex items-center gap-4">
                <Icon className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                <div className="font-mono text-xs uppercase tracking-wide text-gray-600">
                  {param.key}
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <div className="text-xl font-light">{param.value}</div>
                <div className="font-mono text-xs text-gray-400">{param.unit}</div>
              </div>
            </div>
          );
        })}
      </div>

      {loadedParams >= parameters.length - 1 && (
        <div className="mt-4 font-mono text-xs text-gray-400 animate-fade-in">
          ✓ Core parameters optimized
        </div>
      )}
    </div>
  );
}
