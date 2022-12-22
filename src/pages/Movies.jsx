import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { GetSearchMovies } from '../GetAPI/GetAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get('query');
  const [search, setSearch] = useState(username);
  const [arr, setArr] = useState([]);
  const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    if (!username) return;

    GetSearchMovies(username)
      .then(data => {
        setArr([...data]);
      })
      .catch(console.log);
  }, [username]);

  const handleChange = ev => {
    setSearch(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    setSearchParams({ query: search });
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
            <Link to={`${id}`} state={location}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Movies;
