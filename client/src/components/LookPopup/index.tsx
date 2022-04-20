import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import LikeIcon from "@mui/icons-material/ThumbUpOutlined";
import LikeDownIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ArrowDropDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import styles from "./LookPopup.module.scss";
import classNames from "classnames";

const LikeAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,

    transition: {
      duration: 0.3,
      //   ease: 'easeIn',
      type: "spring",
    },
  },

  hidden: {
    opacity: 0,
    x: -55,
    rotate: 180,
  },
};

const BGAnimation = {
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      type: "spring",
    },
  },

  hidden: {
    opacity: 0,
  },
};

interface LookPopupProps {
  coordinate: { x: number; y: number } | undefined;
  closePopup: () => void;
}

const LookPopup: React.FC<LookPopupProps> = ({ closePopup, coordinate }) => {
  const [moveOnLikeButton, setMoveOnLikeButton] = useState<Boolean>(false);

  const popup = useRef<any>(null);

  const handleClickOutside = (e: Event) => {
    if (popup.current && !popup.current.contains(e.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const PopupAnimation2 = {
    visible: {
      y: 0,
      x: 0,
      scale: 1,

      transition: {
        duration: 0.5,
        type: "tween",
      },
    },

    hidden: {
      y: coordinate?.y,
      x: coordinate?.x,
      scale: 0,
    },

    exit: {
      y: coordinate?.y,
      x: coordinate?.x,
      scale: 0,

      transition: {
        duration: 0.4,
        type: "tween",
      },
    },
  };

  return (
    <>
      <motion.div
        variants={BGAnimation}
        animate="visible"
        initial="hidden"
        exit="hidden"
        className={styles.bg}
      ></motion.div>
      <motion.div
        variants={PopupAnimation2}
        animate="visible"
        initial="hidden"
        exit="exit"
        className={styles.itemPopup__wrapper}
      >
        <div className={styles.itemPopup} ref={popup}>
          <div className={styles.itemPopup__img}>
            <div className={styles.filter}></div>
            <img
              src="https://occ-0-1432-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfzG_e5cu4msjMPTwPHggZR_3Jy6NlBGPyuxh7_ywW1pIUcQujl2tVIofIwTC5VBauOwUl6x5RrZmqHkiXT_3HFOHavn8msxJ1L3Py0dr88sk97f_EUPxBnhvrTU.jpg?r=ed1"
              alt="Movie preview"
            />
          </div>
          <div className={styles.itemInfo}>
            <div className={styles.itemInfo__icons}>
              <div className={styles.itemInfo__icons_control}>
                <div className={classNames(styles.itemInfo__icon, styles.play)}>
                  <button>
                    <PlayArrowIcon />
                    <span>Смотреть</span>
                  </button>
                </div>
                <div className={classNames(styles.itemInfo__icon, styles.add)}>
                  <button>
                    <AddIcon />
                  </button>
                </div>

                <div
                  onMouseEnter={() => setMoveOnLikeButton(true)}
                  onMouseLeave={() => setMoveOnLikeButton(false)}
                  className={classNames(styles.assessment, {
                    [styles.active]: moveOnLikeButton,
                  })}
                >
                  <div
                    className={classNames(styles.itemInfo__icon, styles.like)}
                  >
                    <LikeIcon />
                  </div>
                  <AnimatePresence>
                    {moveOnLikeButton && (
                      <motion.div
                        key="modal"
                        variants={LikeAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={classNames(
                          styles.itemInfo__icon,
                          styles.like
                        )}
                      >
                        <LikeDownIcon />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className={styles.itemInfo__icons_more}>
                <div className={styles.itemInfo__icon}>
                  <ArrowDropDownIcon />
                </div>
              </div>
            </div>
            <div className={styles.itemInfo__top}>
              <span className={styles.age}>16+</span>
              <span className={styles.time}>2 ч. 4 мин.</span>
            </div>
            <div className={styles.short__desc}>
              <ul>
                <li>Остроумный</li>
                <li>Остросюжетный</li>
                <li>Увлекательный</li>
              </ul>
            </div>
            <div className={styles.desc}>
              В поисках пропавшей матери отважная девушка Энола Холмс использует
              свои детективные навыки, чтобы перехитрить старшего брата Шерлока
              и помочь беглому лорду.
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LookPopup;
