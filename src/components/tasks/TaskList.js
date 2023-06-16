import NewTask from "./NewTask";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
  const deleteTask = (id) => {
    props.onDelete(id);
  };
  const completeTask = (id) => {
    props.onComplete(id);
  };
  const addTask = (title, description) => {
    props.onAdd(title, description);
    console.log(title, description);
  };

  return (
    <div className={styles.list}>
      <NewTask onSubmit={addTask} />

      {props.tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            taskData={task}
            onDelete={deleteTask}
            onComplete={completeTask}
          ></TaskItem>
        );
      })}
    </div>
  );
};

export default TaskList;
