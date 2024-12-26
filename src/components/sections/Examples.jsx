import { useAppStore } from '../../stores/appStore';
import { useTaskStore } from '../../stores/taskStore';
import { TaskItem, TaskInput, FilterButtons } from '../ui';

const TaskList = () => {
  const { 
    tasks, filter,
    addTask, toggleTask, deleteTask, setFilter
  } = useTaskStore();
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="space-y-4">
      <TaskInput onAdd={addTask} />
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      <div className="space-y-2">
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

const Examples = () => {
  const isDark = useAppStore((state) => state.theme === 'dark');

  return (
    <div className="space-y-8">
      <div className={`p-6 rounded-lg ${
        isDark ? 'bg-slate-800' : 'bg-white'
      }`}>
        <h3 className="text-xl font-semibold mb-4">Task Management Example</h3>
        <p className={`mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          This example demonstrates render-driven architecture with a task management app.
          Notice how all state lives in the store and components focus purely on rendering.
        </p>
        <TaskList />
      </div>
    </div>
  );
};

export default Examples;