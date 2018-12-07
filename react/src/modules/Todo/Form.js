import React, { PureComponent } from 'react';
import styles from './styles.module.scss';

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  onInputChange = e => {
    const text = e.target.value;
    this.setState({
      text
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    this.props.onSubmit(e, text);
    this.setState({
      text: ''
    });
  };

  render() {
    console.log(`render Form ${new Date()}`);
    return (
      <div>
        <form className={styles['todo-form']} onSubmit={this.onSubmit}>
          <span>待办事项: </span>
          <input
            type="text"
            placeholder="你想做点什么"
            ref={this.inputRef}
            value={this.state.text}
            onChange={this.onInputChange}
          />
          <button type="submit">保存</button>
        </form>
      </div>
    );
  }
}

export default Form;
