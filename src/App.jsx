import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

const App = () => {
  const todoItems = [
    { name: "Buy Milk", dueDate: "04/10/2023" },
    { name: "Go to College", dueDate: "23/09/2023" },
    { name: "Proppose Her", dueDate: "09/11/2023" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
};
export default App;
