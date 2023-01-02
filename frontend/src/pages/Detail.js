import { Fragment, useState, useEffect } from "react";
import tmbdApi from "../api/tmbdApi";
import apiMovie from "../api/apiMovie";
import { useParams } from "react-router-dom";
import CastList from "../Components/UI/CastList";
import MovieList from "../Components/UI/MovieList";

import classes from "./Detail.module.css";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageList from "../Components/UI/ImageList";

const Detail = () => {
  const { category, id } = useParams();
  // console.log(category, id);
  const [item, setItem] = useState(null);
  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await tmbdApi.detail(category, id, { params: {} });
        console.log(response.data);
        setItem(response.data);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, [category, id]);

  return (
    <Fragment>
      {item && (
        <Fragment>
          <div
            className={classes.banner}
            style={{
              backgroundImage: `url(${apiMovie.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className={classes["detail-container"]}>
            <div className={classes["movie-poster"]}>
              <div
                className={classes["poster-img"]}
                style={{
                  backgroundImage: `url(${apiMovie.w300Image(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className={classes["movie-info"]}>
              <h1 className={classes.title}>
                {item.original_title ||
                  item.title ||
                  item.name ||
                  item.original_name}
              </h1>
              <div className={classes.rating}>{item.vote_average}</div>
              <div className={classes.genres}>
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className={classes["genre-item"]}>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className={classes["movie-overview"]}>{item.overview}</p>
              <div className={classes.playlist}>
                <button type="button" className={classes.addWatchlist}>
                  <i class="far fa-bookmark"></i>
                  Add to my Watchlist
                </button>
              </div>
              <div className={classes.cast}>
                <div class="cast-header">
                  <h2>Casts</h2>
                </div>
                {<CastList cat={category} id={item.id} />}
              </div>
            </div>
          </div>
          <ImageList />

          <div className={classes.similar}>
            <h2 className={classes["similar-header"]}>Similar</h2>
            <MovieList category={category} type="similar" id={item.id} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Detail;
