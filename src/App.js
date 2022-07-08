import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import './index.css'
import DetailPage from './pages/Details';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/categories/:idc" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;