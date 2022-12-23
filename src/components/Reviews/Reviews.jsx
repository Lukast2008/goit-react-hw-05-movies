
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMoviesReviews } from '../../GetAPI/GetAPI';

const Reviews = () => {
  const params = useParams();
  const [reviewer, serReviewer] = useState([]);
  const { id } = params;

  useEffect(() => {
    GetMoviesReviews(id).then(response => serReviewer(response.data.results));
  }, [id, serReviewer]);


  if (reviewer.length === 0) return <h2>Reviewer not found</h2>;

  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviewer.map(({ author, content, id }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Reviews;
