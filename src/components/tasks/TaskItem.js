import Card from "../Card";
import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const { id, title, description, dueDate, priority, completedStatus } =
    props.taskData;

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

  const priorityClasses =
    priority === "low"
      ? styles.low
      : priority === "middle"
      ? styles.middle
      : priority === "high"
      ? styles.high
      : styles.low;
  return (
    <Card>
      <div className={!completedStatus ? priorityClasses : styles.completed}>
        <p> a </p>
      </div>
      <div className={detailsClasses}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{dueDate}</p>
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
