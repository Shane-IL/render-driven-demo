import { useDemoStore } from '../../stores/demoStore';
import { CodeBlock, ConceptCard, BadCounter, GoodCounter } from '../ui';

const CoreConcepts = () => {
  const { count } = useDemoStore();

  return (
    <div className="space-y-8">
      <ConceptCard title="1. Central State Management">
        <p className={'mb-4 text-slate-300'}>
          In render-driven architecture, all significant state lives in a central store. 
          This makes state changes explicit and trackable. Local component state is used 
          only for UI-specific concerns like form inputs or dropdowns.
        </p>
        <CodeBlock>
{`// Central store definition
const useStore = create((set) => ({
  count: ${count},
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 }))
}))

// Component just consumes store
const Counter = () => {
  const { count, increment } = useStore()
  return <button onClick={increment}>{count}</button>
}`}
        </CodeBlock>
      </ConceptCard>

      <ConceptCard title="2. Compare Approaches">
        <p className={`mb-4 text-slate-300`}>
          Let's compare a traditional local state approach with a render-driven one. 
          Try clicking the counters below and notice how the store-driven approach
          keeps state changes explicit and maintainable.
        </p>
        
        <div className="space-y-4">
          <BadCounter />
          <GoodCounter />
        </div>

        <p className={`mt-4 text-slate-300`}>
          While both achieve the same result, the store-driven approach makes state 
          changes more predictable and easier to debug. It also enables state reuse
          across components.
        </p>
      </ConceptCard>

      <ConceptCard title="3. Pure Components">
        <p className={`mb-4 text-slate-300`}>
          Components in render-driven architecture focus solely on rendering UI based 
          on their inputs. They don't manage complex state or side effects.
        </p>
        <CodeBlock>
{`// Pure component example
const UserCard = ({ name, role, onEdit }) => (
  <div className="card">
    <h3>{name}</h3>
    <p>{role}</p>
    <button onClick={onEdit}>Edit</button>
  </div>
)

// Usage
const UserList = () => {
  const { users, editUser } = useStore()
  return users.map(user => (
    <UserCard 
      key={user.id}
      {...user}
      onEdit={() => editUser(user.id)}
    />
  ))
}`}
        </CodeBlock>
      </ConceptCard>

      <ConceptCard title="4. One-Way Data Flow">
        <p className={`mb-4 text-slate-300`}>
          Data flows in one direction: from the store through props to components.
          When state changes, React's render system automatically updates the UI.
        </p>
        <div className={`p-4 rounded-lg bg-slate-900`}>
          <div className="flex justify-between items-center text-slate-400">
            <div>Store</div>
            <div className='text-2xl'>→</div>
            <div>Props</div>
            <div className='text-2xl'>→</div>
            <div >Render</div>
            <div className='text-2xl'>→</div>
            <div>UI</div>
          </div>
        </div>
      </ConceptCard>
    </div>
  );
};

export default CoreConcepts;