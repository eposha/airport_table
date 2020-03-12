import * as  tasksGateway from './tasksGateway';
import { tasksListSelector } from './tasks.selectors';

export const TASKS_LIST_RECEIVED = 'TASKS_LIST_RECEIVED';

export const tasksListReceived = tasksList => {
    const action = {
        type: TASKS_LIST_RECEIVED,
        payload: {
            tasksList
        }
    }

    return action;
}

export const getTasksList = () => {
    return function (dispatch, getState) {
        tasksGateway.fetchTasksList()
            .then(tasksList => {
                dispatch(tasksListReceived(tasksList))
            })
    };
};

export const updateTask = (taskId) => (dispatch, getState) => {
    const state = getState();
    const tasksList = tasksListSelector(state);

    const task = tasksList.find(task => task.id === taskId);
    const updatedTask = {
        ...task,
        done: !task.done
    };
    tasksGateway
        .updateTask(taskId, updatedTask)
        .then(() => dispatch(getTasksList())
        )
};

export const deleteTask = (taskId) => (dispatch, getState) => {
    tasksGateway
        .deleteTask(taskId).then(() => dispatch(getTasksList()))
};

export const createTask = (text) => (dispatch, getState) => {
    const newTask = {
        text,
        done: false
    };

    tasksGateway
        .createTask(newTask).then(() => dispatch(getTasksList()))
}