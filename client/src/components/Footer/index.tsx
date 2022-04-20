import React from "react";
import logo from "../../assets/logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.socials}>
        <a href="https://www.facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://instagram.com">
          <InstagramIcon />
        </a>
        <a href="https://www.youtube.com">
          <YouTubeIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
