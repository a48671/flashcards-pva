import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/home-page';
import LearnPage from '@/pages/learn-page';
import RepeatingPage from '@/pages/repeating-page';
import { Navigation } from './presentation/components/navigation';
import { BASENAME } from './config';

const App = () => {
  return (
    <BrowserRouter basename={ BASENAME }>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow px-4 pt-6 pb-24"> {/* pb-24 makes space for nav */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn/:setId" element={<LearnPage />} />
            <Route path="/repeating" element={<RepeatingPage />} />
          </Routes>
        </main>

        <Navigation />
      </div>
    </BrowserRouter>
  );
};

export default App;