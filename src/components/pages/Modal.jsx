import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { GetMoviesByID } from '../GetAPI/GetAPI';

import styles from '../styles.module.css';

export const Modal = () => {
  const params = useParams();
  const [res, setRes] = useState([]);

  // const [ show, setShow]=useState(false)
  const UrlImg = 'https://image.tmdb.org/t/p/w342/';

  const { id } = params;

  useEffect(() => {
    GetMoviesByID(id).then(data => setRes(data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    poster_path,
    vote_average,
    overview,
    genres = [],
    release_date,
    title,
  } = res;
  const genresList = genres.map(genre => genre.name).join(' / ');
  return (
    <>
      <h2>
        {title}
        {`(${release_date})`}
      </h2>
      <div className={styles.mod}>
        <img src={`${UrlImg}${poster_path}`} alt={title}></img>
        <ul className={styles.list}>
          <li className={styles.listItem} key={nanoid()}>
            <span className={styles.listTitle}>User score: </span>
            {vote_average}
          </li>
          <li className={styles.listItem} key={nanoid()}>
            <span className={styles.listTitle}>Overview: </span>
            {overview}
          </li>
          <li className={styles.listItem} key={nanoid()}>
            <span className={styles.listTitle}>Genres: </span>
            {genresList}
          </li>
        </ul>
      </div>
      <h3>Additional information</h3>
      <nav className={styles.link}>
        <Link to="cast" key={id}>
          Cast
        </Link>
        <Link to="reviews" key={id}>
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
