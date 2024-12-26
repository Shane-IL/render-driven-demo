import { useAppStore } from '../../stores/appStore';

export const CodeBlock = ({ children }) => {
  const isDark = useAppStore((state) => state.theme === 'dark');
  return (
    <pre className={`p-4 rounded-lg border overflow-x-auto ${
      isDark 
        ? 'bg-slate-900 border-slate-700 text-slate-300' 
        : 'bg-slate-50 border-slate-200 text-slate-700'
    }`}>
      <code>{children}</code>
    </pre>
  );
};