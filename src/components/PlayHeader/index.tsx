import { useClock, useRouter } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import classes from './PlayHeader.module.scss';
import { useEffect, useMemo, useState } from 'react';
import Modal from '../Modal';
import { FcAlarmClock } from 'react-icons/fc';
import { reSetConfig } from '../../redux/config';

const PlayHeader = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { amount, difficulty } = useAppSelector((state) => state.config);
  const [showTimeUp, setShowTimeUp] = useState<boolean>(false);

  const totaltime = useMemo((): number => {
    switch (difficulty) {
      case 'easy':
        return amount * 30;
      case 'medium':
        return amount * 40;
      case 'hard':
        return amount * 60;

      default:
        return amount * 45;
    }
  }, [amount, difficulty]);

  const { formattedTimeLeft, timeLeft } = useClock(totaltime);

  const handlePlayAgain = () => {
    (document.getElementById('button-sound') as HTMLAudioElement).play();
    dispatch(reSetConfig());
    setShowTimeUp(false);
    router.replace('/');
  };
  const handleViewStats = () => {
    (document.getElementById('button-sound') as HTMLAudioElement).play();
    setShowTimeUp(false);
    router.replace('/stats');
  };

  useEffect(() => {
    if (timeLeft === 0) {
      (document.getElementById('timeup-sound') as HTMLAudioElement)?.play();
      setShowTimeUp(true);
    }
  }, [timeLeft, setShowTimeUp]);

  return (
    <div className={classes.box}>
      <h2 className={classes.timeleft}>
        Time left:{' '}
        <span style={{ color: timeLeft > 30 ? '#58CB8E' : '#D93737', marginLeft: '0.25rem' }}>
          {formattedTimeLeft}
        </span>
      </h2>

      <Modal
        open={showTimeUp}
        onClose={() => {
          setShowTimeUp(false);
        }}
      >
        <div className={classes.modal_wrapper}>
          <FcAlarmClock className={classes.modal_icon} />
          <h1 className={classes.modal_title}>Time's Up</h1>
          <div className={classes.modal_btns}>
            <button onClick={handlePlayAgain}>Play again</button>
            <button onClick={handleViewStats}>View your stats</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PlayHeader;
