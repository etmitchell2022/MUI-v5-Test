import React from 'react';
import { Box, Button, TextField, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Button variant='contained' color='error'>
          Test button
        </Button>
        <TextField variant='outlined' type='outlined' label='test' />
      </ThemeProvider>
    </div>
  );
}

export default App;
