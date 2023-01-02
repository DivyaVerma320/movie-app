import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmbdApi from "../../api/tmbdApi";
import apiMovie from "../../api/apiMovie";
import ImageGallery from "react-image-gallery";
import classes from "./ImageList.module.css";

const ImageList = () => {
  let imagesForGallery;
  const { category, id } = useParams();
  const [images, setImage] = useState([]);
  useEffect(() => {
    const getImagesArr = async () => {
      try {
        const response = await tmbdApi.getImages(category, id);
        console.log(response);
        setImage(response.data.backdrops);
      } catch (error) {
        console.log(error);
      }
    };
    getImagesArr();
  }, [category, id]);

  imagesForGallery = images.map((img) => ({
    original: apiMovie.originalImage(img.file_path),
    thumbnail: apiMovie.w185Image(img.file_path),
  }));

  return (
    <div className={classes["movie-gallery"]}>
      <h3 className={classes["gallery-title"]}>Gallery</h3>
      {imagesForGallery.length > 0 ? (
        <ImageGallery items={imagesForGallery} />
      ) : null}
    </div>
  );
};

export default ImageList;
