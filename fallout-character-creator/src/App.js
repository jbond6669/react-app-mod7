import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router for routing
import { ThemeProvider } from '@mui/material/styles'; // Material UI ThemeProvider
import theme from './theme'; // Custom theme
import Home from './components/Home';
import CharacterCreator from './components/CharacterCreator';
import CharacterList from './components/CharacterList';
import { CharacterProvider } from './CharacterContext'; // Import CharacterProvider

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap the app with ThemeProvider to use the custom theme */}
      <CharacterProvider> {/* Wrap with CharacterProvider to provide character context */}
        <Router> {/* Router component from React Router */}
          <Routes> {/* Routes component from React Router */}
            <Route path="/" element={<Home />} /> {/* Define route for Home component */}
            <Route path="/create" element={<CharacterCreator />} /> {/* Define route for CharacterCreator component */}
            <Route path="/characters" element={<CharacterList />} /> {/* Define route for CharacterList component */}
          </Routes>
        </Router>
      </CharacterProvider>
    </ThemeProvider>
  );
}

export default App;
