import { useState } from 'react';
import { Trash2, Plus, Check } from 'lucide-react';
import { useAppStore } from '../../../stores/appStore';

export const TaskItem = ({ task, onToggle, onDelete }) => {
  const isDark = useAppStore((state) => state.theme === 'dark');
  
  return (
    <div className={`flex items-center gap-3 p-3 rounded ${
      isDark ? 'bg-slate-800' : 'bg-white'
    }`}>
      <button
        onClick={() => onToggle(task.id)}
        className={`h-5 w-5 rounded flex items-center justify-center ${
          task.completed 
            ? 'bg-green-500 text-white' 
            : isDark 
              ? 'border border-slate-600' 
              : 'border border-slate-300'
        }`}
      >
        {task.completed && <Check className="h-4 w-4" />}
      </button>
      <span className={`flex-1 ${task.completed ? 'line-through text-slate-500' : ''}`}>
        {task.title}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-600"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
};

export const TaskInput = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const isDark = useAppStore((state) => state.theme === 'dark');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new task..."
        className={`flex-1 p-2 rounded ${
          isDark 
            ? 'bg-slate-800 text-white border-slate-700' 
            : 'bg-white text-slate-900 border-slate-200'
        } border`}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        <Plus className="h-5 w-5" />
      </button>
    </form>
  );
};

export const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const isDark = useAppStore((state) => state.theme === 'dark');
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="flex gap-2">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3 py-1 rounded capitalize ${
            currentFilter === filter
              ? 'bg-blue-500 text-white'
              : isDark
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                : 'bg-white text-slate-700 hover:bg-slate-100'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};