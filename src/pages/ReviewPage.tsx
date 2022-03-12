import ReviewItem from '../components/ReviewItem';
import { useRouter } from '../hooks';
import { reSetConfig } from '../redux/config';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const ReviewPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // selectors
  const { history } = useAppSelector((state) => state.stats);
  const { amount } = useAppSelector((state) => state.config);

  const handleBackToHomepage = () => {
    (document.getElementById('button-sound') as HTMLAudioElement).play();
    dispatch(reSetConfig());
    router.replace('/');
  };

  return (
    <div className='review'>
      <div className='container'>
        <div className='overall'>
          <h2>Your score is: 7/10</h2>
          <p>Correct answers: 5</p>
          <p>Incorrect answers: 2</p>
        </div>

        {history.map((historyItem, index) => (
          <div key={index} className='review-item'>
            <ReviewItem historyItem={historyItem} />
          </div>
        ))}
      </div>
      <div className='btn'>
        <button onClick={handleBackToHomepage}>Back to home page</button>
      </div>
    </div>
  );
};

export default ReviewPage;
