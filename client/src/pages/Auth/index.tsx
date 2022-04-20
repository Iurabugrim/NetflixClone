import React from "react";
import logo from "../../assets/logo.svg";

import styles from "./Auth.module.scss";

type Props = {};

const Auth = (props: Props) => {
  return (
    <div className={styles.auth}>
      <div className={styles.img__wrapper}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e316821f-7177-48f4-b748-e44a8b0840df/02ff030e-3f9a-4f28-b2d0-5373fee1f875/GB-en-20220406-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className={styles.img__gradient}></div>
      </div>

      <div className={styles.header__wrapper}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.signIn__button}>
            <button>Sign In</button>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Unlimited films, TV programmes and more.
          </h1>
          <h2 className={styles.subtitle}>
            Watch anywhere. Cancel at any time.
          </h2>
          <form action="">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className={styles.getStarted}>
              <input type="text" placeholder="Email address" />
              <button type="submit">Get Started</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
