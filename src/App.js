import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Demo from './component/demo';
import Test from './component/test';
import ClientId from './component/clientId';

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route path="/:id" element={<Test />} />
      <Route path="/:id/:storyId" element={<ClientId />} />
    </Routes>
  </Router>
  );
}

export default App;
