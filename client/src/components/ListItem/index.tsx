import React from "react";

import styles from "./ListItem.module.scss";

interface ListItemProps {
  showPopup: (x: number, y: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ showPopup }) => {
  const handleClick = (e: React.MouseEvent) => {
    let x =
      e.clientX > window.innerWidth / 2
        ? e.clientX - window.innerWidth / 2
        : 0 - (window.innerWidth / 2 - e.clientX);
    let y =
      e.clientY > window.innerHeight / 2
        ? e.clientY - window.innerHeight / 2
        : 0 - (window.innerHeight / 2 - e.clientY);

    showPopup(x, y);
  };

  return (
    <div className={styles.listItem} onClick={handleClick}>
      <div className={styles.filter}></div>
      <img
        src="https://occ-0-1432-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfzG_e5cu4msjMPTwPHggZR_3Jy6NlBGPyuxh7_ywW1pIUcQujl2tVIofIwTC5VBauOwUl6x5RrZmqHkiXT_3HFOHavn8msxJ1L3Py0dr88sk97f_EUPxBnhvrTU.jpg?r=ed1"
        alt="Movie preview"
      />
    </div>
  );
};

export default ListItem;
