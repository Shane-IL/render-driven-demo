import { useState } from 'react';
import { Trash2, Plus, Check } from 'lucide-react';

export const TaskItem = ({ task, onToggle, onDelete }) => (
  <div className="flex items-center gap-3 p-3 rounded bg-surface0 border border-surface1">
    <button
      onClick={() => onToggle(task.id)}
      className={`h-5 w-5 rounded flex items-center justify-center ${
        task.completed 
          ? 'bg-green text-base' 
          : 'border border-overlay0'
      }`}
    >
      {task.completed && <Check className="h-4 w-4" />}
    </button>
    <span className={`flex-1 ${task.completed ? 'line-through text-overlay0' : ''}`}>
      {task.title}
    </span>
    <button
      onClick={() => onDelete(task.id)}
      className="text-red hover:text-maroon"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  </div>
);

export const TaskInput = ({ onAdd }) => {
  const [title, setTitle] = useState('');

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
        className="flex-1 p-2 rounded bg-surface0 border border-surface1 text-text placeholder:text-overlay0"
      />
      <button
        type="submit"
        className="bg-blue text-base p-2 rounded hover:bg-sapphire"
      >
        <Plus className="h-5 w-5" />
      </button>
    </form>
  );
};

export const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="flex gap-2">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3 py-1 rounded capitalize ${
            currentFilter === filter
              ? 'bg-blue text-base'
              : 'bg-surface0 text-overlay1 hover:bg-surface1'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};