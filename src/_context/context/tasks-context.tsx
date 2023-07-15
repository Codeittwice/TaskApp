import { DUMMY_TASKS } from "@/utils/dummyData";
import { Task } from "@/utils/types";
import React, { useState } from "react";

var context: {
  tasks: Task[];
  actions: {
    add: (newTask: any) => void;
    complete: (taskIndex: any) => void;
    delete: (taskIndex: any) => void;
  };
} = {
  tasks: [],
  actions: {
    add: (newTask: any) => {},
    complete: (taskIndex: any) => {},
    delete: (taskIndex: any) => {},
  },
};

export const TasksContext = React.createContext(context);

export default (props: any) => {
  const [tasksList, setTasksList] = useState(DUMMY_TASKS);

  const addTask = (newTask: any) => {
    setTasksList((currentTasksList) => {
      return [...currentTasksList, newTask];
    });
  };
  const completeTask = (taskIndex: any) => {
    tasksList[taskIndex].completedStatus = true;
    setTasksList((currentTasksList: any) => {
      return [...currentTasksList];
    });
  };
  const deleteTask = (taskId: any) => {
    setTasksList(tasksList.filter((task) => task.id !== taskId));
    /*setTasksList((currentTasksList: any) => {
      return [...currentTasksList.tasks].slice(taskIndex, 1);
    });*/
  };
  return (
    <TasksContext.Provider
      value={{
        tasks: tasksList,
        actions: { add: addTask, complete: completeTask, delete: deleteTask },
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};
