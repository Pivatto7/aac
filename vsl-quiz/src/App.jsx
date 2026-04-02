import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './pages/Quiz';
import VSL from './pages/VSL';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/vsl" element={<VSL />} />
      </Routes>
    </Router>
  );
}

export default App;
