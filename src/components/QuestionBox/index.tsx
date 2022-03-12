import { shuffleQuestion } from '../../helpers';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import AnswerItem from '../AnswerItem';
import classes from './QuestionBox.module.scss';
import { decode } from 'html-entities';
import { reSetConfig } from '../../redux/config';
import { useRouter } from '../../hooks';
import { useMemo, useState } from 'react';
import { updateStats } from '../../redux/stats';
import Modal from '../Modal';

const QuestionBox = () => {
  // local states
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [showQuit, setShowQuiz] = useState<boolean>(false);

  // hooks
  const { currentQuestion } = useAppSelector((state) => state.stats);
  const { list: questions, loading } = useAppSelector((state) => state.question);
  const config = useAppSelector((state) => state.config);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const current = questions[currentQuestion];

  const handleQuitGame = () => {
    (document.getElementById('button-sound') as HTMLAudioElement).play();

    setShowQuiz(true);
  };

  const handleNextQuestion = () => {
    (document.getElementById('button-sound') as HTMLAudioElement).play();
    setIsAnswered(false);
    setSelected(null);
    dispatch(updateStats({ currentQuestion: currentQuestion + 1 }));
  };

  const handleFinishQuiz = () => {
    (document.getElementById('button-sound') as HTMLAudioElement).play();
    router.replace('/stats');
  };

  const handleCancelQuitGame = () => {
    (document.getElementById('button-sound') as HTMLAudioElement).play();
    setShowQuiz(false);
  };

  const handleConfirmQuitGame = () => {
    (document.getElementById('button-sound') as HTMLAudioElement).play();
    dispatch(reSetConfig());
    setShowQuiz(false);
    router.replace('/');
  };

  const ans = useMemo(() => {
    return shuffleQuestion(questions[currentQuestion]);
  }, [currentQuestion, questions]);

  return (
    <div className={classes.container}>
      {!loading ? (
        questions.length ? (
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
                {currentQuestion < config.amount - 1
                  ? isAnswered && (
                      <button className={classes.next_btn} onClick={handleNextQuestion}>
                        Next question
                      </button>
                    )
                  : isAnswered && (
                      <button className={classes.next_btn} onClick={handleFinishQuiz}>
                        Finish quiz
                      </button>
                    )}
                <button className={classes.quit_btn} onClick={handleQuitGame}>
                  Quit
                </button>
              </div>
            </>
          )
        ) : (
          <div className={classes.box}>
            <h2 className={classes.not_found_title}>There is no questions found!</h2>
            <div className={classes.btn_container}>
              <button className={classes.quit_btn} onClick={handleQuitGame}>
                Quit
              </button>
            </div>
          </div>
        )
      ) : (
        <>
          <div className={classes.box}>Loading...</div>
        </>
      )}

      <Modal open={showQuit} onClose={() => setShowQuiz(false)} closeOnOverlayClick>
        <h2 style={{ textAlign: 'center' }}>Are you sure to quit the game?</h2>
        <div className={classes.modal_btns}>
          <button onClick={handleCancelQuitGame}>Cancel</button>
          <button onClick={handleConfirmQuitGame}>Quit game</button>
        </div>
      </Modal>
    </div>
  );
};

export default QuestionBox;
