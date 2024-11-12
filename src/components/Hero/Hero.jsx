import styles from "./Hero.module.css";
import logo from "../../img/cube.png";
import Button from "../UI/Button/Button";
function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.hero_title}>
        <h1>Let’s stand out whith us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan
          tortor at urna egestas consequat at vitae ligula. Nunc sed fringilla
          leo. Maecenas molestie sapien felis, et tempus ligula convallis eu.
          Quisque id odio sed tellus molestie bibendum. Fusce fermentum
          facilisis venenatis.
        </p>
        <Button className={styles.btn}>Let start</Button>
      </div>
      <div className={styles.hero_image}>
        <img src={logo} alt="Hero"></img>
      </div>
    </main>
  );
}

export default Hero;
