import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Settings from './routes/settings';
import Home from './routes/home';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="settings" element={<Settings />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
