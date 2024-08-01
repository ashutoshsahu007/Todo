import classes from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={classes.todoContainer}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};
export default TodoItems;
