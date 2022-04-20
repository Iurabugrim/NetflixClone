import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import styles from "./NavBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "../Avatar";
import classNames from "classnames";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const checkScroll = () => setScrollY(window.pageYOffset);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", checkScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  });

  return (
    <div
      className={classNames(styles.navbar, {
        [styles.SolidBackground]: scrollY,
      })}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <ul>
            <li className={styles.active}>Главная</li>
            <li>Сериалы</li>
            <li>Фильмы</li>
            <li>Новые и популярные</li>
            <li>Мой список</li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={`${styles.searcher} , ${styles.right_menu__item}`}>
            <SearchIcon />
          </div>
          <div className={`${styles.Kids} , ${styles.right_menu__item}`}>
            <span>Kids</span>
          </div>
          <div
            className={`${styles.notification} , ${styles.right_menu__item}`}
          >
            <NotificationsIcon />
          </div>
          <div
            className={`${styles.account__innner} , ${styles.right_menu__item}`}
          >
            <div className={styles.account}>
              {" "}
              <Avatar color="Purple" />
              <ArrowDropDownIcon className={styles.options__button} />
              <div className={styles.options}>
                <span>Налаштування</span>
                <span>Вийти</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
