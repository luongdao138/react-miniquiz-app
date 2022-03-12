import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateStats } from '../../redux/stats';
import classes from './AnswerItem.module.scss';
import { toast } from 'react-toastify';
import { decode } from 'html-entities';
interface Props {
  text: string;
  isAnswered: boolean;
  isSelected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean>>;
  correctAnswer: string;
}

const AnswerItem = ({
  text,
  isAnswered,
  isSelected,
  setSelected,
  setIsAnswered,
  correctAnswer,
}: Props) => {
  const dispatch = useAppDispatch();
  const { correctAns, incorrectAns, score, attemptedQuestion, history, currentQuestion } =
    useAppSelector((state) => state.stats);
  const containerClass = clsx({
    [classes.container]: true,
  });
  const isCorrect = correctAnswer === text;

  const handleSelectAnswer = () => {
    if (isAnswered) return;

    setSelected(text);
    setIsAnswered(true);

    const newStats = {
      correctAns,
      incorrectAns,
      score,
      attemptedQuestion,
      history,
    };
    console.log(newStats);

    if (isCorrect) {
      newStats.score++;
      newStats.correctAns++;
      newStats.attemptedQuestion++;
      newStats.history.push({ number: currentQuestion, answer: text });
      toast.success('Correct!');
      (document.getElementById('correct-answer') as HTMLAudioElement).play();
    } else {
      newStats.incorrectAns++;
      newStats.attemptedQuestion++;
      newStats.history.push({ number: currentQuestion, answer: text });
      toast.error('Incorrect!');
      (document.getElementById('wrong-answer') as HTMLAudioElement).play();
    }
    dispatch(updateStats(newStats));
  };

  const getBackgroundColor = () => {
    if (!isAnswered) {
      // chưa trả lời
      return 'linear-gradient(to right, #56c9fd, #71b3b8)';
    }

    if (isCorrect) {
      return 'linear-gradient(to right, #57FDA3, #59C18A)';
    }

    // đã trả lời
    if (isSelected) {
      // nếu được chọn
      if (!isCorrect) {
        // và là câu trả lời sai
        return 'linear-gradient(to right, #FE565A, #C46867)';
      }
    }

    return 'linear-gradient(to right, #56c9fd, #71b3b8)';
  };

  return (
    <div
      className={containerClass}
      onClick={handleSelectAnswer}
      style={{ background: getBackgroundColor() }}
    >
      {decode(text)}
    </div>
  );
};

export default AnswerItem;
