import { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';

export default function DownloadButton() {
  const [copied, setCopied] = useState(false);

  const fullMessage = `TEMPORAL TRANSITION PROTOCOL - INFERENCE REPORT

SYSTEM v2.0.2.6
Status: Complete

YEAR-END ARCHIVE:
✓ Historical Data Clusters (2025) - Compressed
✓ Behavioral Patterns (2025) - Archived  
✓ Legacy Frameworks (2025) - Deprecated

PARAMETER INJECTION:
• growth_multiplier: ∞ exponential
• innovation_velocity: 2026 ms⁻¹
• strategic_alignment: 99.9%

PREDICTIVE SIMULATION:
Our proprietary ensemble models—leveraging gradient-boosted decision trees, recurrent neural architectures, and Monte Carlo simulations—project a high-confidence scenario for 2026: a convergence of breakthrough innovations, exponential capability expansion, and unprecedented value creation across all verticals. The algorithm suggests this temporal juncture represents an inflection point in your transformation journey.

Confidence Interval: 94.7%
Potential Uplift: ∞
Impact Multiplier: 12.5x

NEURAL HANDSHAKE:
Translation for organic neural networks: May your 2026 be filled with breakthroughs that defy conventional metrics, serendipitous discoveries that reshape your strategic landscape, and moments of profound clarity that transcend algorithmic prediction.

Here's to optimizing for joy, maximizing for meaning, and deploying solutions that make the world unmistakably better.

— Your Strategic Transformation Partner: Jayakumar (JK)
HAPPY NEW YEAR 2026

© 2026 Strategic Foresight Division • All projections probabilistic`;

  const handleDownload = () => {
    const blob = new Blob([fullMessage], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'temporal-transition-2026-inference-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-3 justify-center">
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors font-mono text-sm"
      >
        <Download className="w-4 h-4" strokeWidth={1.5} />
        Download Inference Report
      </button>
      
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors font-mono text-sm"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" strokeWidth={1.5} />
            Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" strokeWidth={1.5} />
            Copy to Clipboard
          </>
        )}
      </button>
    </div>
  );
}
