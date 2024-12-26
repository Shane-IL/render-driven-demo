import { BookOpen, LayoutGrid, TestTube, LightbulbIcon } from 'lucide-react';

export const SECTIONS = [
  {
    id: 'intro',
    title: 'Introduction',
    icon: BookOpen,
    description: 'Understanding Render-Driven Architecture'
  },
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    icon: LayoutGrid,
    description: 'State, Props, and Renders'
  },
  {
    id: 'examples',
    title: 'Live Examples',
    icon: TestTube,
    description: 'Interactive Demonstrations'
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    icon: LightbulbIcon,
    description: 'Patterns and Anti-patterns'
  }
];