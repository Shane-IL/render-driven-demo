export const ConceptCard = ({ title, children }) => (
  <div className="p-6 rounded-lg bg-surface0 border border-surface1">
    <h3 className="text-xl font-semibold text-text mb-4">{title}</h3>
    {children}
  </div>
);