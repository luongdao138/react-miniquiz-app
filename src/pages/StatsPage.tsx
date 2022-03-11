import { FaRegCheckCircle } from 'react-icons/fa';
import { useRouter } from '../hooks';
import { reSetConfig } from '../redux/config';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const StatsPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const stats = useAppSelector((state) => state.stats);
  const config = useAppSelector((state) => state.config);

  const handlePlayAgain = () => {
    dispatch(reSetConfig());
    router.replace('/');
  };

  return (
    <div className='stats' style={{ padding: '80px 20px' }}>
      <div className='main'>
        <div className='main__icon'>
          <FaRegCheckCircle />
        </div>
        <h1 className='main__title'>Congratulations you made it!</h1>
        <h2 className='main__sub-title'>You can do it better</h2>

        <h1 className='main__score'>
          <span> Your score:</span> {stats.correctAns}/{config.amount} (
          {Math.floor((stats.correctAns * 100) / config.amount)}%)
        </h1>
        <ul className='main__list'>
          <li className='main__list__item'>
            <span>Total number of questions:</span>
            <span>{config.amount}</span>
          </li>
          <li className='main__list__item'>
            <span>Number of correct answers:</span>
            <span>{stats.correctAns}</span>
          </li>
          <li className='main__list__item'>
            <span>Number of wrong answers:</span>
            <span>{stats.incorrectAns}</span>
          </li>
        </ul>

        <div className='main__btns'>
          <button onClick={handlePlayAgain}>Play again</button>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
