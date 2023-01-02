import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { category as cg } from "../api/tmbdApi";
import bg from "../assets/footer-bg.jpg";
import MovieGrid from "../Components/UI/MovieGrid";
import classes from "./Catalog.module.css";
const Catalog = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <Fragment>
      <div
        className={classes["page-header"]}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 class="movies">{category === cg.movie ? "Movies" : "TV Series"}</h2>
      </div>
      <div className={classes.container}>
        <div className={classes["movieList-wrapper"]}>
          <MovieGrid category={category} />
        </div>
      </div>
    </Fragment>
  );
};

export default Catalog;
