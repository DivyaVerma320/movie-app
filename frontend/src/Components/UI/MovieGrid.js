import { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { category, movieType, tvType } from "../../api/tmbdApi";
import MovieCard from "./MovieCard";
import classes from "./MovieGrid.module.css";
import { searchTextAction } from "../../slices/searchTextSlice";
import { fetchGenresArr } from "../../actions/genres-action";
import {
  fetchMovieList,
  fetchTvList,
  loadMoreMovieList,
  loadMoreSearchResults,
  loadMoreTvList,
  searchMovieTv,
} from "../../actions/movieList-action";

const MovieGrid = (props) => {
  const [page, setPage] = useState(1);

  const genresArr = useSelector((state) => state.genres.genresArr);
  const items = useSelector((state) => state.movieList.movieListArr);
  const totalPage = useSelector((state) => state.movieList.totalPage);

  const dispatch = useDispatch();

  const { keyword } = useParams();

  useEffect(() => {
    if (keyword === undefined) {
      dispatch(fetchGenresArr(props.category));

      switch (props.category) {
        case category.movie:
          dispatch(fetchMovieList(movieType.upcoming));
          break;
        default:
          dispatch(fetchTvList(tvType.popular));
      }
    } else {
      const params = {
        query: keyword,
      };

      dispatch(searchMovieTv(props.category, { params }));
    }
  }, [keyword, props.category, dispatch]);

  const loadMore = async () => {
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };

      dispatch(fetchGenresArr(props.category));

      switch (props.category) {
        case category.movie:
          dispatch(loadMoreMovieList(movieType.upcoming, { params }));
          break;
        default:
          dispatch(loadMoreTvList(tvType.popular, { params }));
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };

      dispatch(loadMoreSearchResults(props.category, { params }));
    }
    setPage(page + 1);
  };

  return (
    <Fragment>
      <div className={classes["movieList-grid"]}>
        {items.map((item, i) => (
          <div className={`low ${classes["low-body"]}`}>
            <MovieCard
              item={item}
              category={props.category}
              genres={genresArr}
              key={i}
            />
          </div>
        ))}
      </div>
      <div className={classes["movieList-loadMore"]}>
        {page < totalPage ? (
          <button
            className={`${classes["btn-trailer"]} ${classes["btn-more"]}`}
            onClick={loadMore}
          >
            View more
          </button>
        ) : null}
      </div>
    </Fragment>
  );
};
export const MovieSearch = (props) => {
  const history = useNavigate();
  const query = useSelector((state) => state.searchText.text);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const query = e.target.value;
    dispatch(searchTextAction.searchText(query));

    if (query.trim().length > 0) {
      history(`/${props.category}/search/${query}`);
    }
  };

  return (
    <div className={classes["movie-search"]}>
      <input
        name="search"
        type="text"
        placeholder="Search by movie title"
        onChange={onChangeHandler}
        value={query}
      />
      <i
        className={`fas fa-search ${classes["search-btn"]}`}
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default MovieGrid;
