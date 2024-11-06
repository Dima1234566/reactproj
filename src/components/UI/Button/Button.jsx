import styles from "./Button.module.css";
function Button({ children, className }) {
  return (
    <button
      type="button"
      className={!className ? `${styles.header}` : className}
    >
      {children}
    </button>
  );
}

export default Button;
