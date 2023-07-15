import { Priorities } from "@/utils/enums";
import { useRouter } from "next/router";
import { useStore } from "@/_context/hooks-store/store";

import NewTask from "./NewTask";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = (props: any) => {
  const router = useRouter();
  const dispatch = useStore(true)[1];
  const state = useStore(true)[0];
  const { tasks } = state;

  const deleteTask = (index: number) => (id: string) => {
    dispatch("DELETE", id);
  };

  const addTask = (
    title: string,
    description: string,
    dueDate: string,
    priority: Priorities
  ) => {
    const id = "t" + (tasks.length + 1);
    const newTask = {
      id,
      title,
      description,
      dueDate,
      priority,
      completedStatus: false,
    };
    dispatch("ADD", newTask);
  };

  const completeTask = (index: number) => () => {
    dispatch("COMPLETE", index);
  };

  const linkToTask = (index: number) => () => {
    router.push(router.pathname + "/" + tasks[index].id);
  };

  return (
    <>
      {tasks.map((task: any, index: number) => {
        return (
          <TaskItem
            key={task.id}
            taskData={task}
            onDelete={deleteTask(index)}
            onComplete={completeTask(index)}
            onClick={linkToTask(index)}
          ></TaskItem>
        );
      })}
      <NewTask onSubmit={addTask} />
    </>
  );
};

export default TaskList;
