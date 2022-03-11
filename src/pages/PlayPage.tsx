import { useEffect } from 'react';
import QuestionBox from '../components/QuestionBox';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loadQuestions } from '../redux/question';
import { useSearchParams } from 'react-router-dom';
import { convertQuestionsParams } from '../helpers';

const PlayPage = () => {
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.config);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (config.amount) {
      const params = convertQuestionsParams(config);
      const queryString = Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');
      setSearchParams(queryString);
      dispatch(loadQuestions(config));
    }
  }, [config, dispatch, setSearchParams]);

  return (
    <div className='play'>
      <QuestionBox />
    </div>
  );
};

export default PlayPage;
