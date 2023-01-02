import { useEffect, useState } from "react";
import apiMovie from "../../api/apiMovie";
import tmbdApi from "../../api/tmbdApi";
import classes from "./CastList.module.css";
// import { useParams } from "react-router-dom";

const CastList = (props) => {
  //   const { category, id } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    let response;
    const getCasts = async () => {
      try {
        response = await tmbdApi.getActors(props.cat, props.id);
        console.log(response);
        setCasts(response.data.cast.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    getCasts();
  }, [props.cat, props.id]);
  return (
    <div className={classes.casts}>
      {casts.map((item, i) => (
        <div class={classes["casts-item"]}>
          <div
            key={i}
            className={classes["casts-item-img"]}
            style={{
              backgroundImage: `url(${apiMovie.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className={classes["casts-item-name"]}>
            {item.name || item.original_name}
          </p>
        </div>
      ))}
    </div>
  );
};
export default CastList;
