import "./App.css";
import { useState } from "react";
import TaskList from "./components/tasks/TaskList";
import Header from "./components/navigation/Header";

const DUMMY_TASKS = [
  {
    key: "t1",
    id: "t1",
    title: "Learn React",
    description: "Watch the course",
    completedStatus: false,
  },
  {
    key: "t2",
    id: "t2",
    title: "Learn JavaScript",
    description: "Watch the course",
    completedStatus: false,
  },
  {
    key: "t3",
    id: "t3",
    title: "Learn TypeScript",
    description: "Watch the course",
    completedStatus: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (title, description) => {
    const id = Math.random();
    const newTask = {
      id,
      title,
      description,
      completedStatus: false,
    };
    setTasks((oldTasks) => [...oldTasks, newTask]);
  };

  const completeTask = (id) => {
    let selectedTask = tasks.find((task) => task.id === id);
    selectedTask.completedStatus = true;
    setTasks((oldTasks) => {
      const currentTasks = oldTasks.filter((task) => task.id !== id);
      return [...currentTasks, selectedTask];
    });
  };

  return (
    <>
      <Header></Header>
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={completeTask}
        onAdd={addTask}
      ></TaskList>
    </>
  );
}

export default App;
