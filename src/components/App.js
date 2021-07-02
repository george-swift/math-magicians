import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import '../stylesheet/App.css';
import Navbar from './Nav';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quotes';

const App = () => (
  <Router>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default App;
