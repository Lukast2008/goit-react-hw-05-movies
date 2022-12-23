import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { GetSearchMovies } from '../GetAPI/GetAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get('query');
  const [search, setSearch] = useState(username);
  const [arr, setArr] = useState([]);
  const location = useLocation();
  const [dis, setDis] = useState(true);
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
    !ev.target.value ? setDis(true) : setDis(false);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    setSearchParams({ query: search });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit" disabled={dis}>
          Search
        </button>
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
    </>
  );
};

export default Movies;
