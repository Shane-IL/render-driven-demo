import { TaskItem, TaskInput, FilterButtons } from '../ui/tasks/TaskComponents';
import { useTaskStore } from '../../stores/taskStore';

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

export const TaskExample = () => (
  <div className="bg-surface0 p-6 rounded-lg border border-surface1">
    <h3 className="text-xl font-semibold text-text mb-4">Task Management</h3>
    <p className="text-subtext0 mb-6">
      A simple task manager demonstrating state-driven UI updates and filter controls.
      Notice how state changes instantly reflect in the UI.
    </p>
    <TaskList />
  </div>
);