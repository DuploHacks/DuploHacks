import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import './styles/App.css';
import './styles/Fonts.css';
import Team from './components/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
