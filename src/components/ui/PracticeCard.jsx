import { useAppStore } from '../../stores/appStore';
import { Check, X } from 'lucide-react';

export const PracticeCard = ({ 
  title, 
  description, 
  goodExample, 
  badExample,
  explanation 
}) => {
  const isDark = useAppStore((state) => state.theme === 'dark');
  
  return (
    <div className={`p-6 rounded-lg border ${
      isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
    }`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className={`mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        {description}
      </p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className={`p-4 rounded-lg ${isDark ? 'bg-red-900/20' : 'bg-red-50'}`}>
          <div className="flex items-center gap-2 mb-3">
            <X className="text-red-500" />
            <h4 className="font-semibold">Avoid</h4>
          </div>
          <pre className={`text-sm mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {badExample}
          </pre>
        </div>
        
        <div className={`p-4 rounded-lg ${isDark ? 'bg-green-900/20' : 'bg-green-50'}`}>
          <div className="flex items-center gap-2 mb-3">
            <Check className="text-green-500" />
            <h4 className="font-semibold">Prefer</h4>
          </div>
          <pre className={`text-sm mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {goodExample}
          </pre>
        </div>
      </div>
      
      <p className={`mt-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        {explanation}
      </p>
    </div>
  );
};