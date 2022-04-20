import React from "react";
import styles from "./Featured.module.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface FeaturedProps {
  type?: "Movie" | "Series";
}

const Featured: React.FC<FeaturedProps> = ({ type }) => {
  const [showGenreMenu, setShowGenreMenu] = React.useState<Boolean>(false);

  return (
    <div className={styles.featured}>
      {type && (
        <div className={styles.category}>
          <span>{type === "Movie" ? "Фильмы" : "Сериалы"}</span>
          <div
            className={styles.genre__menu}
            onClick={() => setShowGenreMenu(!showGenreMenu)}
          >
            <div className={styles.genre__menu_button}>
              Жанры
              <ArrowDropDownIcon />
            </div>
            {showGenreMenu && (
              <div className={styles.genre__menu_list}>
                <ul>
                  <li>Аниме</li>
                  <li>Голливуд</li>
                  <li>Детские и семейные</li>
                  <li>Документальные фильмы</li>
                  <li>Драмы</li>
                  <li>Классическое кино</li>
                  <li>Комедии</li>
                </ul>
                <ul>
                  <li>Мюзиклы и музыка</li>
                  <li>Научная фантастика</li>
                  <li>Независимое кино</li>
                  <li>О преступлениях</li>
                  <li>Романтика</li>
                  <li>Спорт</li>
                  <li>Стендап-комедия</li>
                </ul>
                <ul>
                  <li>Триллеры</li>
                  <li>Удостоенные наград</li>
                  <li>Фэнтези</li>
                  <li>Хорроры</li>
                  <li>Экшен</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      <img
        src="https://images.unsplash.com/photo-1562527372-00a214490a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
        alt=""
      />
      <div className={styles.info}>
        <div className={styles.banner}>
          <img
            src="https://occ-0-1432-2774.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABa8sXMo8fnF8cB8EOD4eacZkcIopBYSh4hhWXMeJRuUS7KI0ulDIduBs4gM39Pct5C7c29_2BcTQVwbSRwbpMge33A8EEsTuQVtgcgYUnAfxjWGGxneAqBzr_fVNmxqqcOQkGivckVMlTE8Ij8NI7a4N9NkTtF0o7wRErl3OlVVV.png?r=e46"
            alt=""
          />
        </div>
        <span className={styles.description}>
          Когда исчезает мальчик, жители небольшого городка узнают секрет,
          связанный с тайными экспериментами, ужасными сверхъестественными
          силами и странной маленькой девочкой.
        </span>
        <div className={styles.buttons}>
          <button className={styles.play}>
            <PlayArrowIcon fontSize="large" />
            <span>Смотреть</span>
          </button>
          <button className={styles.more}>
            <InfoOutlinedIcon fontSize="large" />
            <span> Подробнее</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
