import { useState } from "react";
import styles from "./Card.module.css";
import { useEffect } from "react";

function Card({ url }) {
  const [width, setWidth] = useState(450);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setWidth(300);
        setHeight(200);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.card}>
      <img src={url} alt="Photo" width={width} height={height} />
    </div>
  );
}

export default Card;
