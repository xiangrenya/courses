import React from 'react';

const Item = props => {
  console.log(`render Item ${new Date()}`);
  const { todo, onToggle, onDelete } = props;
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        value={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <i className="fa fa-remove" onClick={id => onDelete(id)} />
    </li>
  );
};

export default Item;
