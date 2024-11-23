import Card from "../UI/Card/Card";
import styles from "./Gallery.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("frogs");

  const navigate = useNavigate();
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

  const handleNavigate = (img) => {
    navigate(`/card/${img.id}`, { state: { img } });
  };
  const galleryRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#gallery") {
      galleryRef.current?.scrollIntoView();
    }
  }, []);

  return (
    <section id="gallery" ref={galleryRef} className={styles.gallery}>
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
              <div onClick={() => handleNavigate(image)}>
                <Card url={image.webformatURL} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Gallery;
