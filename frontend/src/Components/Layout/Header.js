import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { MovieSearch } from "../UI/MovieGrid";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  console.log(pathname);
  const key = pathname.split("/");
  let category = key[1];
  if (category === "") category = "movie";
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  console.log(category);
  return (
    <div ref={headerRef} className="header">
      <header>
        <div className={classes.logo}>
          <img src={logo} alt="Logo for the app" />
          <NavLink to="/">MOVEe</NavLink>
        </div>
        <MovieSearch category={category} />
        <a
          className={classes["mobile-nav-toggle"]}
          aria-controls="main-menu"
          href="#main-menu"
          id="main-menu-toggle"
        >
          <span class="sr-only">Menu</span>
          <span class="fa fa-bars fa-lg" aria-hidden="true"></span>
        </a>
        <nav>
          <ul id="main-menu" className={classes["main-menu"]}>
            <a
              className={classes["menu-close"]}
              href="#main-menu-toggle"
              id="main-menu-close"
              aria-label="Close main menu"
            >
              <span class="sr-only">Close main menu</span>
              <span class="fa fa-close fa-lg" aria-hidden="true"></span>
            </a>
            <li className={classes.fancy}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={classes.fancy}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : ""
                }
                to="/movie"
              >
                Movies
              </NavLink>
            </li>
            <li className={classes.fancy}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : ""
                }
                to="/tv"
              >
                TV
              </NavLink>
            </li>
            <li>
              <Link to="#">
                <button className={classes["btn-auth"]}>Sign up</button>
              </Link>
            </li>
          </ul>
          <a
            href="#main-menu-toggle"
            className={classes["backdrop"]}
            tabindex="-1"
            hidden
          >
            <span class="sr-only">Close main menu</span>
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
