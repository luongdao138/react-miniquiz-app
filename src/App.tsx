import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// audios

const App = () => {
  return (
    <>
      <Outlet />
      <ToastContainer autoClose={2000} theme='colored' />
      <div>
        <audio src='audios/correct-answer.mp3' id='correct-answer'></audio>
        <audio src='audios/wrong-answer.mp3' id='wrong-answer'></audio>
        <audio src='audios/button-sound.mp3' id='button-sound'></audio>
        <audio src='audios/time-up.mp3' id='timeup-sound'></audio>
      </div>
    </>
  );
};

export default App;
