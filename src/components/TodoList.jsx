import Todo from './Todo';

const TodoList = ({ todos , onDelete, onToggle }) => {
  return (
    <div className='flex flex-col gap-2'>
      {todos.map((todo) => (
        <Todo key={todo.id}  todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
