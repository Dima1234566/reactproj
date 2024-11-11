import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

function Modal({ url, onClose }) {
  return (
    <div className={styles.modalOwerlay}>
      <div className={styles.container}>
        <div className={styles.close}>
          <div onClick={() => onClose()}>
            <IoClose size={25} fill="#f8f8f8" />
          </div>
        </div>
        <div>
          <img src={url} alt="Photo" width="1280" height="768" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
