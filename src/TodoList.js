import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

const mapStatetoProps = state => ({
  todos: state.todos,
});

export default connect(mapStatetoProps)(TodoList);
