import classes from './ReviewItem.module.scss';
import { History } from '../../models';
import { useAppSelector } from '../../redux/hooks';
import { decode } from 'html-entities';

interface Props {
  historyItem: History;
}

const ReviewItem = ({ historyItem }: Props) => {
  const config = useAppSelector((state) => state.config);
  const { list } = useAppSelector((state) => state.question);

  const question = list[historyItem.number];
  const isCorrect = question.correct_answer === historyItem.answer;

  return (
    <div className={classes.container}>
      <h3 className={classes.question}>
        <span>
          {' '}
          Question {historyItem.number + 1}/{config.amount}
        </span>
        : {decode(question.question)}
      </h3>
      <p className={classes.correct}>
        Your answer is:{' '}
        <span style={{ color: isCorrect ? 'green' : 'red' }}>
          {' '}
          {isCorrect ? 'Correct' : 'Incorrect'}
        </span>
      </p>
      {/* <div className={classes.answer_container}>
        <div className={classes.answer_item}>Lorem ipsum dolor sit amet.</div>
        <div className={classes.answer_item}>Lorem ipsum dolor sit amet.</div>
        <div className={classes.answer_item}>Lorem ipsum dolor sit amet.</div>
        <div className={classes.answer_item}>Lorem ipsum dolor sit amet.</div>
      </div> */}
      <div className={classes.correction}>
        {isCorrect ? (
          <p className={classes.correction_item}>
            The correct answer is: <span>{decode(question.correct_answer)}</span>
          </p>
        ) : (
          <>
            <p className={classes.correction_item}>
              Your answer is:
              <span>{decode(historyItem.answer)}</span>
            </p>
            <p className={classes.correction_item}>
              The correct answer is:
              <span>{decode(question.correct_answer)}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
