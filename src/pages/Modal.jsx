import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  // useNavigate,
  useParams,
} from 'react-router-dom';
import { GetMoviesByID } from '../GetAPI/GetAPI';
import styles from './styles.module.css';

export const Modal = () => {
  const params = useParams();
  const [res, setRes] = useState([]);
  const location = useLocation();
  const UrlImg = 'https://image.tmdb.org/t/p/w342/';
  const { id } = params;
  // const navigate = useNavigate();

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
      <Link to={location.state}>Back</Link>

      <h2>
        {title}
        {`(${release_date})`}
      </h2>
      <div className={styles.mod}>
        {poster_path ? ( <img src={`${UrlImg}${poster_path}`} alt={title}></img>): (
              <img
                src="http://pdd.com.ua/r/r/AD4F3523-2DF3-11E0-A64B-00E081B0C1AE/3.34_b.gif"
                alt="None"
                width="150"
              ></img>
            )}
       
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
        <Link to="cast" state={location.state}>
          Cast
        </Link>
        <Link to="reviews" state={location.state}>
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Modal;
