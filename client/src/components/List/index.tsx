import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import classNames from "classnames";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListItem from "../ListItem";

import styles from "./List.module.scss";
import "swiper/css";

interface ListProps {
  title: string;
  showPopup: (x: number, y: number) => void;
}

const TextAnimation = {
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      type: "spring",
    },
  },

  hidden: {
    opacity: 0,
    x: -20,

    transition: {
      duration: 1.5,
    },
  },
};

const ArrowAnimation = {
  visible: {
    x: 0,
    scale: 0.6,

    transition: {
      duration: 0.7,
      type: "spring",
    },
  },

  hidden: {
    x: -80,
    y: -2,

    transition: {
      duration: 1,
    },
  },
};

const List: React.FC<ListProps> = ({ title, showPopup }) => {
  const [moveOnTitle, setMoveOnTitle] = React.useState<Boolean>(false);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className={styles.list}>
      <div
        className={styles.list__title}
        onMouseEnter={() => setMoveOnTitle(true)}
        onMouseLeave={() => setMoveOnTitle(false)}
      >
        {title}
        <div className={styles.look__more}>
          <motion.span
            variants={TextAnimation}
            animate={moveOnTitle ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
          >
            Открыть все
          </motion.span>
          <motion.div
            variants={ArrowAnimation}
            animate={moveOnTitle ? "visible" : "hidden"}
            initial="hidden"
          >
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          </motion.div>
        </div>
      </div>
      <div className={styles.list__slider_wrapper}>
        <ArrowBackIosNewOutlined
          fontSize="large"
          className={classNames(styles.slider_arrow, styles.prev)}
          ref={navigationPrevRef}
        />

        <div className={styles.list__container}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={7}
            slidesPerView="auto"
            slidesPerGroup={Math.floor(window.innerWidth / 230)}
            loopFillGroupWithBlank={true}
            loop
            speed={1000}
            allowTouchMove={false}
            grabCursor
            navigation={{
              nextEl: navigationNextRef.current,
              prevEl: navigationPrevRef.current,
            }}
          >
            <SwiperSlide>
              <ListItem showPopup={showPopup} />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem showPopup={showPopup} />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem showPopup={showPopup} />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem showPopup={showPopup} />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem showPopup={showPopup} />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem showPopup={showPopup} />
            </SwiperSlide>
            <SwiperSlide>
              <ListItem showPopup={showPopup} />
            </SwiperSlide>
          </Swiper>
        </div>
        <ArrowForwardIosOutlinedIcon
          fontSize="large"
          className={classNames(styles.slider_arrow, styles.next)}
          ref={navigationNextRef}
        />
      </div>
    </div>
  );
};

export default List;
