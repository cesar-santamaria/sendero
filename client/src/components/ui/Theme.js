import { createTheme } from '@mui/material/styles';

const senderoBlack = "#221F20";
const senderoBlue = "#F7FBFF";
const senderoGrey = "#CCD5DD";

export default createTheme({
  palette: {
    common: {
      black: `${senderoBlack}`,
      blue: `${senderoBlue}`,
      grey: `${senderoGrey}`
    },
    primary: {
      main: `${senderoBlack}`
    },
    secondary: {
      main: `${senderoBlue}`
    }
  }
});