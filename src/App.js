import './App.css';
import Landing from './screens/Landing';
import NotFound from './screens/NotFound';
import Searched from './screens/Searched';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    // all my routes
    <Router>

      <div class='App'>

        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/recipe/:term' element={<Searched/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </div>

    </Router>

  );
}

export default App;