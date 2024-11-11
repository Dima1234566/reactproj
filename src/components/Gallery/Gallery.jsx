import Card from "../UI/Card/Card";
import styles from "./Gallery.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("frogs");
  const [modalOpen, setModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");

  const title = "Frogs Gallery";
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://pixabay.com/api/?key=31600470-cb6dfcad8308a56e880daea1a&q=${search}&image_type=photo&pretty=true&lang=en&per_page=6&page=${page}`
        );

        setImages(response.data.hits);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [page, search]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const openModal = (url) => {
    setLargeImageURL(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className={styles.gallery}>
      <h2>{title}</h2>
      <div className={styles.btns}>
        <div onClick={() => handlePrev()} style={{ cursor: "pointer" }}>
          <IoIosArrowBack size={40} color="#404040" />
        </div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value.trim())}
        />
        <div onClick={() => handleNext()} style={{ cursor: "pointer" }}>
          <IoIosArrowForward size={40} color="#404040" />
        </div>
      </div>

      <div className={styles.container}>
        {images.length > 0 &&
          images.map((image, index) => (
            <div key={index}>
              <h3>{image.tags.toUpperCase()}</h3>
              <div onClick={() => openModal(image.largeImageURL)}>
                <Card url={image.webformatURL} />
              </div>
            </div>
          ))}
      </div>
      {modalOpen && <Modal url={largeImageURL} onClose={() => closeModal()} />}
    </section>
  );
}

export default Gallery;
