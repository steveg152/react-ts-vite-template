import "./App.css";
import { useUsers } from "./services/users";

function App() {
  // const [count, setCount] = useState(0);

  const { data } = useUsers();

  console.log(data);

  return (
    <>
      <div className="w-full border border-slate-500 grid grid-cols-1 gap-2">
        {data?.data?.map((user: Record<string, string | number>) => (
          <div
            className="w-full flex justify-between items-center text-lg px-4 py-2"
            key={user.id}
          >
            <span>{user.firstname}</span>
            <span>{user.lastname}</span>
            <span>{user.email}</span>
            <span>{user.website}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
