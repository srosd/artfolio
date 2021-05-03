import { createMuiTheme } from '@material-ui/core/styles';

export const palette = {
  primary: {
    light: 'rgba(218, 237, 238, .7)',
    main: 'rgba(0, 213, 145, .8)',
    dark: '#e9f2f1',
    contrastText: '#e9f2f1',
  },
  secondary: {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
    contrastText: '#000',
  },
}

const mainTheme = createMuiTheme({
  palette
});


export default mainTheme;