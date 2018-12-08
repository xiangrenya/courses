import React, { lazy, Suspense, Component } from 'react';
import Form from './Form';
// import List from './List';
import Footer from './Footer';
import styles from './styles.module.scss';

const List = lazy(() => import('./List'));

const data = new Array(6).fill(0).map((o, i) => {
  return {
    id: i,
    text: `任务${i + 1}`,
    completed: !!parseInt(Math.random())
  };
});

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: data
    };
  }

  onSubmit = (e, text) => {
    this.setState(state => {
      const todo = {
        id: Date.now(),
        text,
        completed: false
      };
      return {
        todoList: state.todoList.concat(todo)
      };
    });
  };

  onToggle = id => {
    const { todoList } = this.state;
    const index = todoList.findIndex(todo => todo.id === id);
    let todo = todoList[index];
    todo = {
      ...todo,
      completed: !todo.completed
    };
    todoList[index] = todo;
    this.setState({
      todoList
    });
  };

  onDelete = id => {
    let { todoList } = this.state;
    const index = todoList.findIndex(todo => todo.id === id);
    todoList.splice(index, 1);
    this.setState({
      todoList
    });
  };

  render() {
    console.log(`render Index ${new Date()}`);
    const { todoList } = this.state;
    const total = todoList.length;
    const completedCount = todoList.filter(todo => todo.completed).length;
    return (
      <div className={styles['todo-wrap']}>
        <Form onSubmit={this.onSubmit} />
        <Suspense fallback={<div>Loading...</div>}>
          <List
            todoList={todoList}
            onToggle={this.onToggle}
            onDelete={this.onDelete}
          />
        </Suspense>
        <Footer total={total} completedCount={completedCount} />
      </div>
    );
  }
}

export default Index;
