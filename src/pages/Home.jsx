import { Link, Outlet, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { GetDataMovies } from '../GetAPI/GetAPI';

const Home = () => {
  const [arr, setArr] = useState([]);
  const location = useLocation();

  useEffect(() => {
    GetDataMovies()
      .then(data => setArr([...data]))
      .catch(console.log);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {arr.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`}  state={location} key={id}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Home;
