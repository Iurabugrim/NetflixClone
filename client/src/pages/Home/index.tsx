import { AnimatePresence } from "framer-motion";
import React from "react";
import Featured from "../../components/Featured";
import Footer from "../../components/Footer";
import List from "../../components/List";
import LookPopup from "../../components/LookPopup";
import NavBar from "../../components/NavBar";

import styles from "./Home.module.scss";

interface Props {}

const Home: React.FC = (props: Props) => {
  const [showLookPopup, setShowLookPopup] = React.useState<Boolean>(false);
  const [coordinate, setCoordinate] = React.useState<{
    x: number;
    y: number;
  }>();

  const showPopup = (x: number, y: number) => {
    setCoordinate({ x, y });
    document.querySelector("body")!.style.overflow = "hidden";
    setShowLookPopup(true);
  };

  const closePopup = () => {
    document.querySelector("body")!.style.overflow = "visible";
    setShowLookPopup(false);
  };

  return (
    <div className={styles.home}>
      <AnimatePresence>
        {showLookPopup && (
          <LookPopup closePopup={closePopup} coordinate={coordinate} />
        )}
      </AnimatePresence>
      <NavBar />
      <div className={styles.featured}>
        <Featured type="Movie" />
      </div>
      <div className={styles.main}>
        <List title="Комедии" showPopup={showPopup} />
        <List title="Комедии" showPopup={showPopup} />
        <List title="Комедии" showPopup={showPopup} />
        <List title="Комедии" showPopup={showPopup} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
