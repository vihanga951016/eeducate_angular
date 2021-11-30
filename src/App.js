import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import Authentication from './components/authentication/Authentication';
import Profile from './components/profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/auth" element={<Authentication />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>

  );
}

export default App;
