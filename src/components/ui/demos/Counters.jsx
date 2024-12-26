import { useState } from 'react';
import { useAppStore } from '../../../stores/appStore';
import { useDemoStore } from '../../../stores/demoStore';

export const BadCounter = () => {
  const [count, setCount] = useState(0);
  const isDark = useAppStore((state) => state.theme === 'dark');
  
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg ${
      isDark ? 'bg-red-900/20' : 'bg-red-50'
    }`}>
      <button 
        onClick={() => setCount(count - 1)}
        className={`px-3 py-1 rounded ${
          isDark 
            ? 'bg-slate-700 hover:bg-slate-600' 
            : 'bg-slate-200 hover:bg-slate-300'
        }`}
      >
        -
      </button>
      <span className="text-xl w-8 text-center">{count}</span>
      <button 
        onClick={() => setCount(count + 1)}
        className={`px-3 py-1 rounded ${
          isDark 
            ? 'bg-slate-700 hover:bg-slate-600' 
            : 'bg-slate-200 hover:bg-slate-300'
        }`}
      >
        +
      </button>
      <span className="text-slate-400 text-sm">Local state example</span>
    </div>
  );
};

export const GoodCounter = () => {
  const { count, increment, decrement } = useDemoStore();
  const isDark = useAppStore((state) => state.theme === 'dark');
  
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg ${
      isDark ? 'bg-green-900/20' : 'bg-green-50'
    }`}>
      <button 
        onClick={decrement}
        className={`px-3 py-1 rounded ${
          isDark 
            ? 'bg-slate-700 hover:bg-slate-600' 
            : 'bg-slate-200 hover:bg-slate-300'
        }`}
      >
        -
      </button>
      <span className="text-xl w-8 text-center">{count}</span>
      <button 
        onClick={increment}
        className={`px-3 py-1 rounded ${
          isDark 
            ? 'bg-slate-700 hover:bg-slate-600' 
            : 'bg-slate-200 hover:bg-slate-300'
        }`}
      >
        +
      </button>
      <span className="text-slate-400 text-sm">Store-driven example</span>
    </div>
  );
};