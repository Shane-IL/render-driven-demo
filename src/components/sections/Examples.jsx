import { CurrencyExample, DataTableExample, TaskExample } from '../examples';

const ExamplesSection = () => {
  return (
    <div className="space-y-12">
      <TaskExample />
      <DataTableExample />
      <CurrencyExample />
    </div>
  );
};

export default ExamplesSection;