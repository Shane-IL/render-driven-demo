import { ArrowRight } from 'lucide-react';

const IntroSection = () => (
  <div className="space-y-8">
    {/* Hero explanation */}
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
      <h3 className="text-xl font-semibold text-slate-200 mb-4">
        What is Render-Driven Architecture?
      </h3>
      <p className="text-slate-300 leading-relaxed">
        Render-driven architecture is an approach to building React applications where the UI is a pure
        function of state. Instead of imperatively managing UI updates, all changes flow from state updates
        through the render cycle. This creates predictable, maintainable applications that are easier to
        understand and debug.
      </p>
    </div>

    {/* Key benefits */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
        <h4 className="text-lg font-semibold text-blue-400 mb-4">
          Why Use It?
        </h4>
        <ul className="space-y-3">
          {[
            'Predictable state management and UI updates',
            'Clearer separation of concerns',
            'Easier debugging and testing',
            'Better performance through optimized renders',
          ].map((benefit, i) => (
            <li key={i} className="flex text-slate-300">
              <ArrowRight className="h-5 w-5 mr-2 text-blue-400 shrink-0 mt-1" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
        <h4 className="text-lg font-semibold text-purple-400 mb-4">
          Core Principles
        </h4>
        <ul className="space-y-3">
          {[
            'State is the single source of truth',
            'Components are pure render functions',
            'Updates flow in one direction',
            'Side effects are isolated and controlled',
          ].map((principle, i) => (
            <li key={i} className="flex text-slate-300">
              <ArrowRight className="h-5 w-5 mr-2 text-purple-400 shrink-0 mt-1" />
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Example preview */}
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
      <h4 className="text-lg font-semibold text-green-400 mb-4">
        See It In Action
      </h4>
      <p className="text-slate-300 mb-4">
        This very app demonstrates render-driven architecture. Notice how:
      </p>
      <ul className="space-y-3">
        {[
          'The sidebar, theme, and navigation state are managed in a central store',
          'UI updates happen automatically when state changes',
          'Components focus purely on rendering their data',
          'Everything flows predictably from state → render → UI',
        ].map((example, i) => (
          <li key={i} className="flex text-slate-300">
            <ArrowRight className="h-5 w-5 mr-2 text-green-400 shrink-0 mt-1" />
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default IntroSection;