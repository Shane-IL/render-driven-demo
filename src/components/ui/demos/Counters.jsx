import { useState } from 'react';
import { useDemoStore } from '../../../stores/demoStore';

export const BadCounter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-surface0 border border-red">
      <button 
        onClick={() => setCount(count - 1)}
        className="px-3 py-1 bg-surface1 hover:bg-surface2 rounded"
      >
        -
      </button>
      <span className="text-xl w-8 text-center">{count}</span>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-surface1 hover:bg-surface2 rounded"
      >
        +
      </button>
      <span className="text-overlay1 text-sm">Local state example</span>
    </div>
  );
};

export const GoodCounter = () => {
  const { count, increment, decrement } = useDemoStore();
  
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-surface0 border border-green">
      <button 
        onClick={decrement}
        className="px-3 py-1 bg-surface1 hover:bg-surface2 rounded"
      >
        -
      </button>
      <span className="text-xl w-8 text-center">{count}</span>
      <button 
        onClick={increment}
        className="px-3 py-1 bg-surface1 hover:bg-surface2 rounded"
      >
        +
      </button>
      <span className="text-overlay1 text-sm">Store-driven example</span>
    </div>
  );
};