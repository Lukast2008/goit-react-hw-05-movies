import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GetSearchMovies } from '../GetAPI/GetAPI';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [getMovies, setGetMovies] = useState(false);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (!getMovies) return;
    GetSearchMovies(search)
      .then(data => setArr([...data]), setGetMovies(true))
      .catch(console.log);
  }, [getMovies, search]);

  const handleChange = ev => {
    setSearch(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    setGetMovies(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      <ul>
        {arr.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Movies;
