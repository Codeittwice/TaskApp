import { useRouter } from "next/router";
import TaskDetails from "../../components/tasks/TaskDetails";

export default function TaskDetailsPage() {
  const router = useRouter();
  return <TaskDetails id={router.query._id}></TaskDetails>;
}
