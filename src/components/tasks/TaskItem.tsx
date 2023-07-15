import Card from "../Card";
import styles from "./TaskItem.module.css";
import { Priorities } from "@/utils/enums";

const TaskItem = (props: any) => {
  const { id, title, priority, completedStatus } = props.taskData;

  const taskCompleteHandler = (event: any) => {
    event.preventDefault();
    props.onComplete(id);
  };

  const taskDeleteHandler = (event: any) => {
    event.preventDefault();
    props.onDelete(id);
  };

  const detailsClasses = completedStatus
    ? styles["details-completed"]
    : styles.details;

  const priorityClasses =
    priority === Priorities.low
      ? styles.low
      : priority === Priorities.middle
      ? styles.middle
      : priority === Priorities.high
      ? styles.high
      : styles.low;

  return (
    <Card>
      <div className={!completedStatus ? priorityClasses : styles.completed}>
        <p> a </p>
      </div>
      <div className={detailsClasses}>
        <h1>{title}</h1>
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
        <button onClick={props.onClick} className={styles["details-button"]}>
          Details
        </button>
      </div>
    </Card>
  );
};

export default TaskItem;
