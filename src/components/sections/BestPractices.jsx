import { useAppStore } from '../../stores/appStore';
import { PracticeCard } from '../ui';

const BestPractices = () => {
  return (
    <div className="space-y-8">
      <PracticeCard
        title="Centralize State Updates"
        description="Keep state updates in your store, not spread across components. This makes state changes predictable and traceable."
        badExample={`// Component modifying state directly
const TodoItem = ({ todo }) => {
  const updateTodo = async () => {
    const result = await api.update(todo)
    setTodos([...todos, result])
  }
}`}
        goodExample={`// Store handling state updates
const useStore = create((set) => ({
  updateTodo: async (todo) => {
    const result = await api.update(todo)
    set(state => ({
      todos: [...state.todos, result]
    }))
  }
}))`}
        explanation="When state updates are centralized in the store, it's easier to track changes, debug issues, and maintain consistency across your application."
      />

      <PracticeCard
        title="Keep Components Pure"
        description="Components should focus on rendering UI based on props and store values. Avoid complex logic in components."
        badExample={`const UserCard = ({ userId }) => {
  const [userData, setUserData] = useState(null)
  
  useEffect(() => {
    fetchUserData(userId)
      .then(setUserData)
  }, [userId])

  if (!userData) return null
  return <div>{userData.name}</div>
}`}
        goodExample={`// Store handles data fetching
const useStore = create((set) => ({
  users: {},
  fetchUser: async (id) => {
    const user = await fetchUserData(id)
    set(state => ({
      users: { ...state.users, [id]: user }
    }))
  }
}))

// Component just renders
const UserCard = ({ userId }) => {
  const user = useStore(s => s.users[userId])
  return user ? <div>{user.name}</div> : null
}`}
        explanation="Pure components are easier to test, reuse, and maintain. They're also more predictable since they always render the same output for the same inputs."
      />

      <PracticeCard
        title="Organize Store Logic"
        description="Structure your store into logical slices and keep related state together."
        badExample={`const useStore = create((set) => ({
  users: [],
  products: [],
  orders: [],
  setUsers: (users) => set({ users }),
  setProducts: (products) => set({ products }),
  setOrders: (orders) => set({ orders }),
}))`}
        goodExample={`const useStore = create((set) => ({
  users: {
    data: [],
    isLoading: false,
    error: null,
    fetch: async () => {
      set(state => ({
        users: { ...state.users, isLoading: true }
      }))
      try {
        const data = await api.users.getAll()
        set(state => ({
          users: { data, isLoading: false, error: null }
        }))
      } catch (error) {
        set(state => ({
          users: { ...state.users, error, isLoading: false }
        }))
      }
    }
  }
}))`}
        explanation="Organizing related state and its operations together makes the code more maintainable and easier to understand. It also helps prevent state-related bugs."
      />

      <PracticeCard
        title="Use Selectors Wisely"
        description="Use selectors to access store state efficiently and prevent unnecessary re-renders."
        badExample={`// Getting whole store state
const Component = () => {
  const store = useStore()
  return <div>{store.users.length}</div>
}`}
        goodExample={`// Using specific selector
const Component = () => {
  const userCount = useStore(
    state => state.users.length
  )
  return <div>{userCount}</div>
}`}
        explanation="Selectors help optimize performance by ensuring components only re-render when the specific data they use changes."
      />
    </div>
  );
};

export default BestPractices;