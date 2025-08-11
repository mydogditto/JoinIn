import React, { Suspense } from 'react'; import { Link, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Slots from '../pages/Slots';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

<Suspense fallback={<div>Loading...</div>}></Suspense>
function App() {
  return (
    <>

      {/* NavBar using MUI AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/" sx={{ mr: 2 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
          <Button color="inherit" component={Link} to="/slots">
            Slots
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content area */}
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/slots" element={<Slots />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;