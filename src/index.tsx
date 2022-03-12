import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import { PersistGate } from 'redux-persist/integration/react';
import ReviewPage from './pages/ReviewPage';

// pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const PlayPage = React.lazy(() => import('./pages/PlayPage'));
const StatsPage = React.lazy(() => import('./pages/StatsPage'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path='/' element={<App />}>
              <Route
                index
                element={
                  <React.Suspense fallback={null}>
                    <HomePage />
                  </React.Suspense>
                }
              />
              <Route
                path='play'
                element={
                  <React.Suspense fallback={null}>
                    <PlayPage />
                  </React.Suspense>
                }
              />
              <Route
                path='stats'
                element={
                  <React.Suspense fallback={null}>
                    <StatsPage />
                  </React.Suspense>
                }
              />
              <Route
                path='review'
                element={
                  <React.Suspense fallback={null}>
                    <ReviewPage />
                  </React.Suspense>
                }
              />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
