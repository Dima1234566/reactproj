import styles from "./Header.module.css";
import logo from "../../logo.svg";
import Button from "../UI/Button/Button";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" width={50} height={50} />
        <span>REACT APP</span>
      </div>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <Button className={styles.button}>Contact</Button>
      </div>
    </header>
  );
}

export default Header;
