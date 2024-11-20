import styles from "./Footer.module.css";
import logo from "../../logo.svg";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { BsFillGeoAltFill } from "react-icons/bs";
import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <div className={styles.logo_img}>
          <img src={logo} alt="Logo" width={140} height={140} />
        </div>
        <div className={styles.contacts}>
          <div className={styles.contact_item}>
            <div>
              <a href="https://www.google.com.ua/maps/@50.4435633,30.5846129,6585m/data=!3m1!1e3?hl=ru&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">
                <BsFillGeoAltFill size={30} />
              </a>
            </div>
            <address>
              Address: 1234 Street Name, City Name, United States
            </address>
          </div>
          <div className={styles.contact_item}>
            <div>
              <a href="tel:+1234567890">
                <FaPhone size={30} />
              </a>
            </div>
            <p>Phone: +1234567890</p>
          </div>
          <div className={styles.contact_item}>
            <div>
              <a href="mailto:example@mail.com">
                <CiMail size={30} />
              </a>
            </div>
            <p>Email: example@mail.com</p>
          </div>
        </div>
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
      <div className={styles.social}>
        <div>
          <a href="http://">
            <FaTelegram size={40} />
          </a>
        </div>
        <div>
          <a href="http://">
            <FaInstagram size={40} />
          </a>
        </div>
        <div>
          <a href="http://">
            <FaFacebook size={40} />
          </a>
        </div>
        <div>
          <a href="http://">
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
