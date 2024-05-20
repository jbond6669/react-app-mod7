import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import CharacterCreator from './components/CharacterCreator';
import Home from './components/Home';
import CharacterList from './components/CharacterList';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CharacterCreator />} />
          <Route path="/characters" element={<CharacterList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
