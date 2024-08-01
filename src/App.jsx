import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems([
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  return (
    <center className="todo-container">
      <AppName />

      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}

      <TodoItems todoItems={todoItems} />
    </center>
  );
};
export default App;
