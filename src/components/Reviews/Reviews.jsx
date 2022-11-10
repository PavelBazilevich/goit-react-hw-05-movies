import { useParams } from 'react-router-dom';
import { getReviews } from 'Utils/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Layout, ReviewList, ReviewItem, ReviewAvtor } from './Reviews.styled';

const Reviews = () => {
  const [revievsData, setReviewsData] = useState([]) ?? {};
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fethReviews = async () => {
      try {
        const fethReview = await getReviews(id);
        setReviewsData(fethReview);
      } catch {
        setError('Oops... 😥. Please try again 😊');
      }
    };
    fethReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Layout>
      {error && <p>{error}</p>}
      {revievsData?.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      {revievsData?.length > 0 && (
        <ReviewList>
          {revievsData.map(({ id, author, content }) => {
            return (
              <ReviewItem key={id}>
                <ReviewAvtor>Author: {author}</ReviewAvtor>
                <p>{content}</p>
              </ReviewItem>
            );
          })}
        </ReviewList>
      )}
    </Layout>
  );
};
export default Reviews;
