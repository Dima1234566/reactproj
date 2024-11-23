import Header from "../../components/Header/Header";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./CardInfo.module.css";
import Modal from "../../components/UI/Modal/Modal";
function CardInfo() {
  const locatoin = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const data = locatoin.state.img;
  const openModal = (url) => {
    setLargeImageURL(url);
    setModalOpen(true);
  };
  const navigate = useNavigate();
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleNavigate = () => {
    navigate(`/#gallery`);
  };
  return (
    <>
      <Header />

      <span className={styles.back} onClick={() => handleNavigate()}>
        <IoArrowBackCircleSharp size={60} color="blue" />
      </span>

      <div className={styles.container}>
        <h1>Card Info</h1>
        <div className={styles.card}>
          <div
            className={styles.card_img}
            onClick={() => openModal(data.largeImageURL)}
          >
            <img
              src={data.largeImageURL}
              alt="Photo"
              width="800"
              height="600"
            />
          </div>
          <div className={styles.card_info}>
            <h2>Information</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              eos dolore quo! Quia consequatur natus ullam, repellendus,
              reiciendis quidem consequuntur exercitationem quisquam officia
              obcaecati voluptates, facere laboriosam tempore necessitatibus
              impedit.
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Collections</th>
                  <th>Comments</th>
                  <th>Downloads</th>
                  <th>Likes</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tr>
                <td>{data.collections}</td>
                <td>{data.comments}</td>
                <td>{data.downloads}</td>
                <td>{data.likes}</td>
                <td>{data.tags}</td>
              </tr>
            </table>
          </div>
        </div>
        {modalOpen && (
          <Modal url={largeImageURL} onClose={() => closeModal()} />
        )}
      </div>
    </>
  );
}

export default CardInfo;
