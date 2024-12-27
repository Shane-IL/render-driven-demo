import { Check, X } from 'lucide-react';

export const PracticeCard = ({ 
  title, 
  description, 
  goodExample, 
  badExample,
  explanation 
}) => (
  <div className="p-6 rounded-lg bg-surface0 border border-surface1">
    <h3 className="text-xl font-semibold text-text mb-4">{title}</h3>
    <p className="mb-6 text-subtext0">
      {description}
    </p>
    
    <div className="grid md:grid-cols-2 gap-4">
      <div className="p-4 rounded-lg bg-base border border-surface1">
        <div className="flex items-center gap-2 mb-3">
          <X className="text-red" />
          <h4 className="font-semibold text-subtext0">Avoid</h4>
        </div>
        <pre className="text-sm mb-3 text-overlay2">
          {badExample}
        </pre>
      </div>
      
      <div className="p-4 rounded-lg bg-base border border-surface1">
        <div className="flex items-center gap-2 mb-3">
          <Check className="text-green" />
          <h4 className="font-semibold text-subtext0">Prefer</h4>
        </div>
        <pre className="text-sm mb-3 text-overlay2">
          {goodExample}
        </pre>
      </div>
    </div>
    
    <p className="mt-4 text-subtext0">
      {explanation}
    </p>
  </div>
);