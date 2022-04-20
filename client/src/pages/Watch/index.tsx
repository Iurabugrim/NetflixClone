import React from "react";
import BackIcon from "@mui/icons-material/ArrowBackOutlined";

import styles from "./Watch.module.scss";
import { Link } from "react-router-dom";

type Props = {};

const Watch = (props: Props) => {
  return (
    <div className={styles.watch}>
      <Link to="/">
        <div className={styles.back__button}>
          <BackIcon />
        </div>
      </Link>
      <video
        className={styles.video}
        autoPlay
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      ></video>
    </div>
  );
};

export default Watch;
