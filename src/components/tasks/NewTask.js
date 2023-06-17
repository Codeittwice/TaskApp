import { useRef, useState } from "react";
import styles from "./NewTask.module.css";
import Card from "../Card";
import Modal from "../Modal";

const NewTask = (props) => {
  const defaultErrorMsg = "Please enter valid task information!";

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(" ");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const title = useRef();
  const description = useRef();
  const date = useRef();
  const priority = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      isValidForm(
        title.current.value,
        description.current.value,
        date.current.value,
        priority.current.value
      )
    ) {
      let dateString = "";
      if (date.current.value !== "") {
        dateString += new Date(date.current.value).toDateString();
      }
      props.onSubmit(
        title.current.value,
        description.current.value,
        dateString,
        priority.current.value
      );

      setError(false);
      setErrorMsg("");
      setOverlay(false);
      setTitleError(false);
      setDescriptionError(false);

      title.current.value = undefined;
      description.current.value = undefined;
      date.current.value = undefined;
      priority.current.value = undefined;
    } else {
      setError(true);
      setTitleError(!isValidTitle(title.current.value));
      setDescriptionError(!isValidDescription(description.current.value));
    }
  };
  const onTriggerOverlayHandler = () => {
    setOverlay(!overlay);
  };

  const isValidForm = (_title, _description, _date, _priority) => {
    if (!isValidTitle(_title)) {
      setErrorMsg((oldMsg) => oldMsg + "\nInvalid name\n");
    }
    if (!isValidDescription(_description)) {
      setErrorMsg((oldMsg) => oldMsg + "\nInvalid description\n");
    }
    if (!isValidDate(_date)) {
      setErrorMsg((oldMsg) => oldMsg + "\nInvalid date\n");
    }
    if (!isValidPriority(_priority)) {
      setErrorMsg((oldMsg) => oldMsg + "\nInvalid priority\n");
    }

    if (
      isValidTitle(_title) &&
      isValidDescription(_description) &&
      isValidDate(_date) &&
      isValidPriority(_priority)
    )
      return true;
    return false;
  };

  return (
    <>
      <button className={styles.open} onClick={onTriggerOverlayHandler}>
        +
      </button>
      {overlay && (
        <Modal onClose={onTriggerOverlayHandler}>
          <div className={styles.new}>
            <form onSubmit={onSubmitHandler}>
              {error && (
                <div className={styles.error}>
                  <p>{defaultErrorMsg}</p>
                </div>
              )}
              <div className={styles.content}>
                {titleError && (
                  <label style={{ color: "red" }}> *required</label>
                )}
                <input type="text" placeholder="Title" ref={title}></input>
                {descriptionError && (
                  <label style={{ color: "red" }}> *required</label>
                )}
                <input
                  type="text"
                  placeholder="Description"
                  ref={description}
                ></input>

                <input type="date" placeholder="Date" ref={date}></input>
                <input
                  type="text"
                  placeholder="Priority"
                  ref={priority}
                ></input>
              </div>
              <div className={styles.submit}>
                <button type="submit">Add New Task</button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};
const isValidTitle = (value) => {
  if (value !== "") return true;
  return false;
};
const isValidDescription = (value) => {
  if (value !== "") return true;
  return false;
};
const isValidDate = (value) => {
  if (true) return true;
  return false;
};
const isValidPriority = (value) => {
  if (value === "low" || value === "middle" || value === "high" || value === "")
    return true;
  return false;
};

export default NewTask;
