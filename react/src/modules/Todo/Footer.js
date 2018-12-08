import React from 'react';
import styles from './styles.module.scss';

const Footer = React.memo(props => {
  console.log(`render Footer ${new Date()}`);
  const { total, completedCount } = props;
  return (
    <div className={styles['todo-footer']}>
      已完成&nbsp;
      <span className={styles.success}>{completedCount}</span>
      &nbsp;|&nbsp;总数<span>{total}</span>
    </div>
  );
});

export default Footer;
