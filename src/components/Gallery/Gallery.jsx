import Card from "../UI/Card/Card";
import styles from "./Gallery.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("frogs");

  const title = "Frogs Gallery";
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://pixabay.com/api/?key=31600470-cb6dfcad8308a56e880daea1a&q=${search}&image_type=photo&pretty=true&lang=en&per_page=15&page=${page}`
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

  return (
    <section className={styles.gallery}>
      <h2>{title}</h2>
      <div className={styles.btns}>
        <button onClick={() => handlePrev()}>- page</button>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value.trim())}
        />
        <button onClick={() => handleNext()}>page +</button>
      </div>

      <div className={styles.container}>
        {images.length > 0 &&
          images.map((image, index) => (
            <div key={index}>
              <h3>{image.tags.toUpperCase()}</h3>
              <Card url={image.webformatURL} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Gallery;