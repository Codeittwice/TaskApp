import Card from "../Card";
import styles from "./TaskItem.module.css";
import { Priorities } from "@/utils/enums";
import { useStore } from "@/_context/hooks-store/store";

const TaskDetails = (props: any) => {
  const state = useStore()[0];

  const currentTask = state.tasks.find((task: any) => {
    if (task.id === props.id) return task;
  });

  if (!currentTask) return;
  const { id, title, description, dueDate, priority, completedStatus } =
    currentTask;

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
        <p>{description}</p>
        <p>{dueDate}</p>
      </div>
    </Card>
  );
};

export default TaskDetails;
