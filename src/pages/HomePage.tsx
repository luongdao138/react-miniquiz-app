import ConfigForm from '../components/ConfigForm';

const HomePage = () => {
  return (
    <div className='home'>
      <h1 className='home__title'>React Quiz</h1>
      <div>
        <ConfigForm />
      </div>
    </div>
  );
};

export default HomePage;
