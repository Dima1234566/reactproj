import styles from "./Header.module.css";
import logo from "../../logo.svg";
import Button from "../UI/Button/Button";
import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
    setOpen((prevState) => !prevState);
  };

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
      <div className={styles.social}>
        <div>
          <a href="http://">
            <FaTelegram size={25} />
          </a>
        </div>
        <div>
          <a href="http://">
            <FaInstagram size={25} />
          </a>
        </div>
        <div>
          <a href="http://">
            <FaFacebook size={25} />
          </a>
        </div>
        <div>
          <a href="http://">
            <FaLinkedin size={25} />
          </a>
        </div>
        <div>
          <Button className={styles.button}>Contact</Button>
        </div>
      </div>
      <div className={styles.burger}>
        <span onClick={() => toggleMenu()}>
          {!open && <GiHamburgerMenu size={40} />}
          {open && <IoMdClose size={40} />}
        </span>
      </div>
      {showMobileMenu && (
        <div className={styles.mobile}>
          <nav>
            <ul className={styles.navigationMob}>
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
          <div className={styles.socialMob}>
            <div>
              <a href="http://">
                <FaTelegram size={25} />
              </a>
            </div>
            <div>
              <a href="http://">
                <FaInstagram size={25} />
              </a>
            </div>
            <div>
              <a href="http://">
                <FaFacebook size={25} />
              </a>
            </div>
            <div>
              <a href="http://">
                <FaLinkedin size={25} />
              </a>
            </div>
            <div>
              <Button className={styles.button}>Contact</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
