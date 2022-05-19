import React from "react";
import Timer from "../timer/Timer";

import useTranslete from "../hooks/useTranslete";

import "./Header.scss";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as LogoutIcon } from "../assets/logout.svg";
import { ReactComponent as LoginIcon } from "../assets/login.svg";

import { Link, NavLink } from "react-router-dom";
import Username from "./username/Username";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";


// const LINKS = [
//   // { url: "/login", text: "Login" },
//   { url: "/registration", text: "Registration" },
//   { url: "/posts", text: "Posts" },
//   { url: "/myposts", text: "My Posts" },
// ]

const getLinks = (logged: boolean) => ([
  { url: "/registration", text: "Registration" },
  { url: "/posts", text: "Posts" },
  ...(!logged ? [] : [
    { url: "/myposts", text: "My Posts" },
  ])
])

const Header: React.FC = () => {


  const { lang, setLang } = useTranslete();
  const logged = useSelector(state => state.auth.logged);
  const { logout } = useActions();
  const links = getLinks(logged);;

  const handleLogout = () => {
    logout();
  }



  return (
    <nav className="header-container">
      <div className="logo">
        <Logo />
        <div className="app-name">
          Blogger blog
        </div>
      </div>

      <ul className="links">
        {links.map(({ url, text }) =>
          <li key={url + text}>
            <NavLink to={url} className={({ isActive }) => isActive ? "_active" : ""}>
              {text}
            </NavLink>
          </li>
        )}




      </ul>

      <div className="controls">


        {lang === "en"
          ?
          <button onClick={() => setLang("ru")}>
            ru
          </button>
          :
          <button onClick={() => setLang("en")}>
            en
          </button>
        }

        {logged ?
          <>
            <Username />
            <LogoutIcon
              className="icon-button logout-button"
              onClick={handleLogout}
            />
          </>
          :
          <Link to="/login">
            <LoginIcon
              className="icon-button logout-button"
              onClick={handleLogout}
            />
          </Link>

        }

        <Timer />
      </div>
    </nav>

  )
}

export default Header;