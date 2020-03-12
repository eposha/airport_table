import React from "react";
import { connect } from "react-redux";
import * as tasksActions from "../tasks.actions";
class CreateTaskInput extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleTaskCreate = () => {
    this.props.createTask(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="create-task__input"
        />
        <button
          className="btn create-task__btn"
          onClick={this.handleTaskCreate}
        >
          Create
        </button>
      </div>
    );
  }
}

export default connect(null, tasksActions)(CreateTaskInput);

// +1. Take text from input
// +2. Create task with this text
// +3. Add created task to the list
