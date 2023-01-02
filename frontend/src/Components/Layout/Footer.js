import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/footer-logo.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes["bottom-push"]}></div>
      <footer>
        <div className={classes["footer-logo"]}>
          <img src={logo} alt="Logo for the app" />
          <Link to="/">MOVEe</Link>
        </div>
        <div className={classes.social}>
          <h4>Stay Connected!</h4>
          <ul>
            <li>
              <Link to="#">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-github"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.message}>
          &copy; Made with&nbsp;
          <i className={`fas fa-heart ${classes.heart}`}></i> by&nbsp;
          <a href="https://github.com/AlankritVerma07">Alankrit & Jackie</a>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
