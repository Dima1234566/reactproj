import styles from "./Card.module.css";

function Card({ url }) {
  return (
    <div className={styles.card}>
      <img src={url} alt="Photo" width="450" />
    </div>
  );
}

export default Card;
