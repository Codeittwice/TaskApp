import { useRef, useState } from "react";
import styles from "./NewTask.module.css";
import Card from "../Card";

const NewTask = (props) => {
  const title = useRef();
  const description = useRef();
  const [error, setError] = useState(false);
  const errorMsg = "Please enter valid task information!";

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.current.value !== "" && description.current.value !== "") {
      props.onSubmit(title.current.value, description.current.value);
      setError(false);
      title.current.value = "";
      description.current.value = "";
    } else {
      setError(true);
    }
  };
  return (
    <Card>
      <div className={styles.new}>
        <form onSubmit={onSubmitHandler}>
          {error && (
            <div className={styles.error}>
              <p>{errorMsg}</p>
            </div>
          )}
          <div className={styles.content}>
            <input type="text" placeholder="Title" ref={title}></input>
            <input
              type="text"
              placeholder="Description"
              ref={description}
            ></input>
          </div>
          <div className={styles.submit}>
            <button type="submit">+</button>
          </div>
        </form>
      </div>
      {}
    </Card>
  );
};

export default NewTask;
