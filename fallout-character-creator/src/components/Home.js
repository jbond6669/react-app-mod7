import React from 'react';
import { Link } from 'react-router-dom'; // Link component from React Router
import { Button } from '@mui/material'; // Button component from Material UI
import Typography from '@mui/material/Typography'; // Typography component from Material UI

function Home() {
  return (
    <div>
      <Typography variant="h2" style={{ color: 'blue' }}>
        You are S.P.E.C.I.A.L!!
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/create" style={{ backgroundColor: 'blue', color: 'white' }}>
        Create a Character
      </Button>
      <Button variant="contained" color="primary" component={Link} to="/characters" style={{ backgroundColor: 'blue', color: 'white', marginLeft: '10px' }}>
        View Characters
      </Button>
    </div>
  );
}

export default Home;
