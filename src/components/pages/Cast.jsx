import { GetMoviesByDetailed } from '../GetAPI/GetAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import styles from '../styles.module.css';

const Cast = () => {
  const params = useParams();
  const [info, setInfo] = useState([]);

  const { id } = params;
  const UrlImg = 'https://image.tmdb.org/t/p/w154';

  useEffect(() => {
    GetMoviesByDetailed(id).then(response => setInfo(response.data.cast));
  }, [id, setInfo]);

  if (info.length === 0) return (<h2>Cast not found</h2>);
  return (
    <>
      <h3>Cast</h3>
      <ul className={styles.listCast}>
        { info.map(({ name, profile_path, character }) => (
          <li className={styles.listItemCast} key={nanoid()}>
            <img src={`${UrlImg}${profile_path}`} alt={name} width="150"></img>
            <span>{name}</span>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
