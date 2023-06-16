import Card from "../Card";
import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const { id, title, description, completedStatus } = props.taskData;
  console.log(props.taskData);

  const taskCompleteHandler = (event) => {
    event.preventDefault();
    props.onComplete(id);
  };

  const taskDeleteHandler = (event) => {
    event.preventDefault();
    props.onDelete(id);
  };

  const detailsClasses = completedStatus
    ? styles["details-completed"]
    : styles.details;
  return (
    <Card>
      <div className={detailsClasses}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.completion}>
        <button
          onClick={taskCompleteHandler}
          className={styles["complete-button"]}
          disabled={completedStatus}
        >
          {completedStatus ? <p>Completed</p> : <p>Complete Task</p>}
        </button>
        <button onClick={taskDeleteHandler} className={styles["delete-button"]}>
          Delete Task
        </button>
      </div>
    </Card>
  );
};

export default TaskItem;
