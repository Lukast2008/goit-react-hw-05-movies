import { Link, Outlet } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { GetDataMovies } from '../GetAPI/GetAPI';

const Home = () => {
  const [arr, setArr] = useState([]);


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
              <Link to={`movies/${id}`} key={id}>
                {original_title}
              </Link>
              <Outlet />
            </li>
          ))}
        </ul>
      </>
  
  );
};
 
export default Home