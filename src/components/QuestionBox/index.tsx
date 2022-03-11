import { shuffleQuestion } from '../../helpers';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import AnswerItem from '../AnswerItem';
import classes from './QuestionBox.module.scss';
import { decode } from 'html-entities';
import { reSetConfig } from '../../redux/config';
import { useRouter } from '../../hooks';
import { useMemo, useState } from 'react';
import { updateStats } from '../../redux/stats';

const QuestionBox = () => {
  // local states
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  // hooks
  const { currentQuestion } = useAppSelector((state) => state.stats);
  const { list: questions, loading } = useAppSelector((state) => state.question);
  const config = useAppSelector((state) => state.config);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const current = questions[currentQuestion];

  const handleQuitGame = () => {
    dispatch(reSetConfig());
    router.replace('/');
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelected(null);
    dispatch(updateStats({ currentQuestion: currentQuestion + 1 }));
  };

  const handleFinishQuiz = () => {
    router.replace('/stats');
  };

  const ans = useMemo(() => {
    return shuffleQuestion(questions[currentQuestion]);
  }, [currentQuestion, questions]);

  return (
    <div className={classes.container}>
      {!loading ? (
        current && (
          <>
            <div className={classes.box}>
              <div className={classes.question_number}>
                <span>Question:</span> {currentQuestion + 1} / {config.amount}
              </div>
              <div className={classes.question_text}>{decode(current.question)}</div>

              <div className={classes.ans_wrapper}>
                {ans.map((q, index) => (
                  <AnswerItem
                    key={index}
                    isAnswered={isAnswered}
                    text={q}
                    isSelected={selected === q}
                    setSelected={setSelected}
                    setIsAnswered={setIsAnswered}
                    correctAnswer={current.correct_answer}
                  />
                ))}
              </div>
            </div>
            <div className={classes.btn_container}>
              {currentQuestion < config.amount - 1 ? (
                <button className={classes.next_btn} onClick={handleNextQuestion}>
                  Next question
                </button>
              ) : (
                isAnswered && (
                  <button className={classes.next_btn} onClick={handleFinishQuiz}>
                    Finish quiz
                  </button>
                )
              )}
              <button className={classes.quit_btn} onClick={handleQuitGame}>
                Quit
              </button>
            </div>
          </>
        )
      ) : (
        <>
          <div className={classes.box}>Loading...</div>
        </>
      )}
    </div>
  );
};

export default QuestionBox;
