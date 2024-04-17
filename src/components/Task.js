import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../actions/taskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = (e) => {
    const newDescription = prompt('Edit Task Description:', task.description);
    if (newDescription !== null) {
      dispatch(editTask(task.id, newDescription));
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      <span>{task.description}</span>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;