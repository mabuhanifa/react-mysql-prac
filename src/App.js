import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
    </Routes>
  );
}

export default App;
