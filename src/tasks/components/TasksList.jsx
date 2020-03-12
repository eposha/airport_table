import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sortedTasksListSelector } from "../tasks.selectors";
import * as tasksAction from "../tasks.actions";
import Task from "./Task";

const TasksList = ({ tasks, getTasksList, updateTask, deleteTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <ul className="list">
      {tasks.map(task => (
        <Task
          key={task.id}
          {...task}
          onDelete={deleteTask}
          onChange={updateTask}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    tasks: sortedTasksListSelector(state)
  };
};

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape())
};

export default connect(mapStateToProps, tasksAction)(TasksList);
