import Card from "../Card";
import styles from "./TaskDetails.module.css";
import { useRouter } from "next/router";
import { Pathnames, Priorities } from "@/utils/enums";
import { useStore } from "@/_context/hooks-store/store";

const TaskDetails = (props: any) => {
  const state = useStore()[0];
  const router = useRouter();

  const currentTask = state.tasks.find((task: any) => {
    if (task.id === props.id) return task;
  });

  if (!currentTask) return;
  const { id, title, description, dueDate, priority, completedStatus } =
    currentTask;

  const backButtonHandler = () => {
    router.push(Pathnames.tasks);
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
    <>
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
      <button className={styles.back} onClick={backButtonHandler}>
        {"<"}
      </button>
    </>
  );
};

export default TaskDetails;
