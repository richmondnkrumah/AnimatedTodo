import Todo from './Todo';

const TodoList = ({ todos , onDelete, onToggle }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id}  todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
