import { useState, useEffect } from 'react';
import { Archive, Database, FileText } from 'lucide-react';

interface YearEndArchiveProps {
  onComplete: () => void;
  isActive: boolean;
}

export default function YearEndArchive({ onComplete, isActive }: YearEndArchiveProps) {
  const [showCards, setShowCards] = useState(false);
  const [archiveComplete, setArchiveComplete] = useState(false);

  const archives = [
    { icon: Database, label: 'Historical Data Clusters', status: 'Compressed' },
    { icon: FileText, label: 'Behavioral Patterns', status: 'Archived' },
    { icon: Archive, label: 'Legacy Frameworks', status: 'Deprecated' },
  ];

  useEffect(() => {
    if (!isActive) return;

    setTimeout(() => setShowCards(true), 300);
    setTimeout(() => setArchiveComplete(true), 2400);
    setTimeout(onComplete, 3200);
  }, [isActive, onComplete]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-2 h-2 rounded-full ${archiveComplete ? 'bg-gray-400' : 'bg-blue-500 animate-pulse'}`}></div>
        <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">
          Year-End Archive Protocol
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {archives.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`border border-gray-300 rounded-sm p-5 transition-all duration-500 ${
                showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Icon className="w-6 h-6 text-gray-400 mb-4" strokeWidth={1.5} />
              <div className="font-medium text-sm mb-1">{item.label}</div>
              <div className="font-mono text-xs text-gray-500">2025 • {item.status}</div>
            </div>
          );
        })}
      </div>

      {archiveComplete && (
        <div className="mt-4 font-mono text-xs text-gray-400 animate-fade-in">
          ✓ Legacy systems successfully archived
        </div>
      )}
    </div>
  );
}
