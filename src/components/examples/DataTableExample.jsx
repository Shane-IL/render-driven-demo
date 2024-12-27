import { DataTable } from '../ui/datatable';

export const DataTableExample = () => (
  <div className="bg-surface0 p-6 rounded-lg border border-surface1">
    <h3 className="text-xl font-semibold text-text mb-4">Data Table</h3>
    <p className="text-subtext0 mb-6">
      A more complex example showing how render-driven architecture handles:
    </p>
    <ul className="list-disc list-inside mb-6 text-subtext0 space-y-1">
      <li>Sorting and filtering</li>
      <li>Pagination</li>
      <li>Bulk selection</li>
      <li>Multiple synchronized UI elements</li>
    </ul>
    <DataTable />
  </div>
);