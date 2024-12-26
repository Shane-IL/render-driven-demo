export const ConceptCard = ({ title, children }) => {
    return (
      <div className="p-6 rounded-lg border bg-surface0 border-surface1">
        <h3 className="text-xl font-semibold text-text mb-4">{title}</h3>
        <div className="text-subtext0">
          {children}
        </div>
      </div>
    );
  };