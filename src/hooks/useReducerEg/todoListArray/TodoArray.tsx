import React, { useReducer } from "react";
import AddTaskToList from "./AddTaskToList";
import TaskList1 from "./TaskList1";

function taskReducer(
  tasks: { id: any }[],
  action: { type: string; id: any; text: any; task: { id: any } }
) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    }
    case "change": {
      return tasks.map((t: { id: any }) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t: { id: any }) => t.id !== action.id);
    }
    default: {
      throw Error("unknown action " + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: "Ram", done: true },
  { id: 1, text: "Lakshman", done: true },
  { id: 2, text: "Bharat", done: false }
];
let nextId = 3;

const TodoArray = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  function handleAddTask(text: any) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text
    });
  }

  function handleChangeTask(task: any) {
    dispatch({
      type: "change",
      task: task
    });
  }

  function handleDelteTask(taskId: any) {
    dispatch({
      type: "deleted",
      id: taskId
    });
  }

  return (
    <>
      <h3>Todo List Array</h3>
      <AddTaskToList onAddTask={handleAddTask} />
      <TaskList1
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDelteTask}
      />
    </>
  );
};

export default TodoArray;
