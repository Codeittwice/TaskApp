import styles from "./Header.module.css";
import logo from "../../img/logo.jpg";

const Header = () => {
  return (
    <>
      <header className={styles.main}>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <h1>Task App</h1>
        </div>
      </header>
    </>
  );
};
export default Header;
