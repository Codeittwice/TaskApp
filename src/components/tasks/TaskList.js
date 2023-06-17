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
  const addTask = (title, description, dueDate, priority) => {
    props.onAdd(title, description, dueDate, priority);
    //console.log(title, description);
  };

  return (
    <div className={styles.list}>
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
      <NewTask onSubmit={addTask} />
    </div>
  );
};

export default TaskList;
