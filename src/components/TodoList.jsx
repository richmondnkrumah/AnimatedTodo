import Todo from './Todo';

const TodoList = ({ todos, categories , onDelete, onToggle }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} categories={categories} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
