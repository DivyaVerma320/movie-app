import { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import tmbdApi, { category } from "../../api/tmbdApi";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = (props) => {
  const [listItems, setListItems] = useState([]);
  const [genresArr, setGenresArr] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const params = {};

      let response,
        genresResponse = null;
      try {
        genresResponse = await tmbdApi.getGenres(props.category);
        setGenresArr(genresResponse.data.genres);

        if (props.type !== "similar") {
          switch (props.category) {
            case category.movie:
              response = await tmbdApi.getMoviesList(props.type, {
                params,
              });

              break;
            default:
              response = await tmbdApi.getTvList(props.type, { params });
          }
        } else response = await tmbdApi.similar(props.category, props.id);
        setListItems(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, [props.category, props.id, props.type]);

  return (
    <div class="showCase-movieList-1">
      <Swiper
        modules={[Navigation]}
        loop={true}
        grabCursor={true}
        spaceBetween={10}
        // slidesPerView={6}
        //slidesPerGroup={3}
        breakpoints={{
          100: {
            spaceBetween: 5,
            slidesPerGroup: 1,

            slidesPerView: 2,
          },
          340: {
            spaceBetween: 5,
            slidesPerGroup: 1,

            slidesPerView: 2,
          },
          600: {
            spaceBetween: 5,
            slidesPerGroup: 2,

            slidesPerView: 3,
          },
          1020: {
            spaceBetween: 10,
            slidesPerView: 6,
            slidesPerGroup: 3,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {listItems.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard
              item={item}
              category={props.category}
              genres={genresArr}
            />
          </SwiperSlide>
        ))}
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default MovieList;
