import styles from "./Form.module.css";
import Select from "react-select";
import { select } from "./select.ts";
import React, { useEffect } from "react";
import { LuRefreshCw } from "react-icons/lu";
function Form() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    url: "",
    message: "",
  });
  const [selected, setSelected] = React.useState(null);
  // const [dataToSend, setDataToSend] = React.useState(null);
  const [store, setStore] = React.useState([]);
  //e - event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (!data) {
      localStorage.setItem("data", JSON.stringify(store));
    } else {
      setStore(data);
    }
  }, [store]);

  const onSubmit = async (e) => {
    const data = {
      ...formData,
      type: selected,
    };
    try {
      //   await fetch("https://api.example.com", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(dataToSend),
      //   });
      // setDataToSend(data);

      setFormData({ name: "", email: "", phone: "", url: "", message: "" });
      setSelected(null);

      const storeArr = [...store, data];
      localStorage.setItem("data", JSON.stringify(storeArr));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRefresh = () => {
    localStorage.setItem("data", JSON.stringify([]));
    setStore([]);
  };

  const optionsSelect = [
    { value: "1", label: "For Job" },
    { value: "2", label: "For Learn" },
    { value: "3", label: "For Business" },
  ];

  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1>Contacts form</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            purus ut libero ultrices tincidunt. Nullam nec purus ut libero
            ultrices tincidunt. Nullam nec purus ut libero ultrices tincidunt.
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={styles.input}
              required={true}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={styles.input}
              required={true}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className={styles.input}
              required={true}
              onChange={handleChange}
              pattern="^\+?[0-9]\d{9,14}$"
            />
            <input
              type="url"
              name="url"
              placeholder="Enter your website"
              className={styles.input}
              onChange={handleChange}
            />

            <Select
              name="type"
              placeholder="For what"
              styles={select}
              options={optionsSelect}
              onChange={(e) => setSelected(e.label)}
            ></Select>
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Enter your message"
              onChange={handleChange}
            ></textarea>
            <button className={styles.formBtn} type="submit">
              SUBMIT
            </button>
          </div>
        </form>

        {store.length !== 0 && (
          <div className={styles.title}>
            <h2>Form data</h2>
            <span onClick={() => handleRefresh()}>
              <LuRefreshCw size={50} />
            </span>
          </div>
        )}
        {store.length !== 0 && (
          <div className={styles.card_container}>
            {store.map((item, index) => (
              <div key={index} className={styles.card}>
                <ul>
                  <li key={index}>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Phone: {item.phone}</p>
                    <p>
                      Url:{" "}
                      <a target="_blanck" href={item.url}>
                        Click me
                      </a>{" "}
                    </p>
                    <p>Type: {item.type}</p>
                    <p>Message: {item.message}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Form;

//  <input
//   type="password"
//   name="password"
//   placeholder="Enter password"
//   className={styles.input}
//   onChange={handleChange}
//   required={true}
//   pattern={
//     /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;"'`~<>?,./\\-])[A-Za-z0-9_!@#$%^&*()_+{}[\]:;"'`~<>?,./\\-]{12,}$/
//   }
//   title={
//     "Password must be 12 characters with at least one letter, one number, and one special character"
//   }
// />;
