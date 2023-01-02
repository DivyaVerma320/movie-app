import { Fragment } from "react";
import { category, movieType, tvType } from "../api/tmbdApi";
import MovieList from "../Components/UI/MovieList";
import MovieSlide from "../Components/UI/MovieSlide";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <MovieSlide />
      <section className={classes.showCase}>
        <div className={classes["showCase-1"]}>
          <div className={classes["showCase-title-1"]}>
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <button
                className={`${classes["btn-trailer"]} ${classes["btn-more"]}`}
              >
                View more
              </button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className={classes["showCase-2"]}>
          <div className={classes["showCase-title-1"]}>
            <h2>Top Rated Movies</h2>
            <Link to="/tv">
              <button
                className={`${classes["btn-trailer"]} ${classes["btn-more"]}`}
              >
                View more
              </button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className={classes["showCase-2"]}>
          <div className={classes["showCase-title-1"]}>
            <h2>Trending TV</h2>
            <Link to="/movie">
              <button
                className={`${classes["btn-trailer"]} ${classes["btn-more"]}`}
              >
                View more
              </button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className={classes["showCase-2"]}>
          <div className={classes["showCase-title-1"]}>
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <button
                className={`${classes["btn-trailer"]} ${classes["btn-more"]}`}
              >
                View more
              </button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
