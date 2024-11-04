import styles from "./Hero.module.css";
import logo from "../../img/cube.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_title}>
        <h1>Let’s stand out whith us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan
          tortor at urna egestas consequat at vitae ligula. Nunc sed fringilla
          leo. Maecenas molestie sapien felis, et tempus ligula convallis eu.
          Quisque id odio sed tellus molestie bibendum. Fusce fermentum
          facilisis venenatis.
        </p>
        <button className={styles.btn}>Let start</button>
      </div>
      <div className={styles.hero_image}>
        <img src={logo} alt="Hero"></img>
      </div>
    </section>
  );
}

export default Hero;
