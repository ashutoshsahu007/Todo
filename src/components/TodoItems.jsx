import classes from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={classes.todoContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
          key={index}
        />
      ))}
    </div>
  );
};
export default TodoItems;
