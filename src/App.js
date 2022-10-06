import React from 'react';
import Main from './Main';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
      'Yeseva One'
      ].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
