import React, { Component } from 'react';
import Item from './Item';
import styles from './styles.module.scss';

class List extends Component {
  render() {
    console.log(`render List ${new Date()}`);
    const { todoList, onToggle, onDelete } = this.props;
    return (
      <div>
        <ul className={styles["todo-list"]}>
          {todoList.map(todo => (
            <Item
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
