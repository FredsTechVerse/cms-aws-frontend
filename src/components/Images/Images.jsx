import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Image from "../Image/Image";
import "./Images.css";
const Images = () => {
  const [imageAddress, setImageAddress] = useState([]);

  useEffect(() => {
    const greetings = async () => {
      let message = await axios.get("./images");
      let images = message.data;
      setImageAddress(images);
      console.log(images);
    };

    greetings();
  }, []);

  return (
    <div className="container">
      <h1>CONSUMING IMAGES FROM MONGODB</h1>
      <p>
        This application demonstrates consumption of images uploaded to mongodb
        via multer.
      </p>

      <h3>Images in MongoDB</h3>
      <div className="imagesContainer">
        {imageAddress.map((image) => {
          return <Image src={image.location} />;
        })}
      </div>
    </div>
  );
};

export default Images;
