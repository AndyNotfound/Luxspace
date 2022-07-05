import './index.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  );
}

export default App;