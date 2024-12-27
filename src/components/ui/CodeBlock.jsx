export const CodeBlock = ({ children }) => (
  <pre className="p-4 rounded-lg bg-base
   border border-surface text-text overflow-x-auto">
    <code>{children}</code>
  </pre>
);