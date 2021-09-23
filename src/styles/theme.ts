import { createTheme, Theme } from '@mui/material';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { primary, red } from './colors';

import { palette } from './palette';

export const theme: Theme = createTheme({
  palette,
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover $notchedOutline': {
            borderWidth: 5,
          },
        },
        notchedOutline: {
          border: '2px solid red',
          '&:hover': {
            border: '5px solid yellow!important',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          fontWeight: 700,
        },
        contained: {
          enabled: {
            borderRadius: '4px',
            border: '1px',
            backgroundColor: `${red}`,
            color: `${primary}`,
            fontWeight: 700,
          },
          '&:disabled': {
            border: '1px',
            color: '#9ca2a8',
            fontWeight: 700,
          },
          '&:hover': {
            border: '1px',
            backgroundColor: `${primary}`,
            color: `white`,
            fontWeight: 700,
          },
        },
      },
    },
  },
});
