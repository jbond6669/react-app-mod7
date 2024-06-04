import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import backgroundImage from './images/vault-tec.jpg'; // Import your background image

function Home() {
  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <Typography variant="h2" style={{ color: 'blue' }}>
        Welcome Potential Vault Dwellers
      </Typography>
      <Typography variant="p" style={{ color: 'blue' }}>
        Are you ready for the potential Nuclear Fallout in the future? If you answered NO then proceed to our Vault Tec application to apply.
      </Typography>
      <Typography variant="p" style={{ color: 'blue' }}>
        If you have already applied then check your status on our Vault Dwellers Page!
        And remember, You are S.P.E.C.I.A.L!!
      </Typography>
      <Typography variant="p" style={{ color: 'blue' }}>
        And remember, You are S.P.E.C.I.A.L!!
      </Typography>
      <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary" component={Link} to="/create" style={{ backgroundColor: 'blue', color: 'white', margin: '0 10px' }}>
          Apply Now!
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/characters" style={{ backgroundColor: 'blue', color: 'white', margin: '0 10px' }}>
          List of Vault Dwellers
        </Button>
      </Container>
    </div>
  );
}

export default Home;
