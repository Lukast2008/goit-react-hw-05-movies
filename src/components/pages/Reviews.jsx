import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMoviesReviews } from '../GetAPI/GetAPI';

export const Reviews = () => {
  const params = useParams();
  const [reviewer, serReviewer] = useState([]);
  const { id } = params;

  useEffect(() => {
    GetMoviesReviews(id).then(response => serReviewer(response.data.results));
  }, [id, serReviewer]);

  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {reviewer.map(({ author, content }) => (
          <li key={nanoid()}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
