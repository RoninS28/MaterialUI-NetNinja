Lesson 1 Intro n Setup
Material UI is created by Google,
Install it by the command <!--? npm install @mui/material -->
Here, the default font style is Roboto. You'll have to include the cdn link for that font in public/index.html
<!--! ============================================================================================================== -->

Lesson 6 Custom Themes
In App.js import { createTheme, ThemeProvider } from '@mui/material/styles'
then, create a theme variable const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeeee',
    },
    secondary: pink
  },
});

After that, wrap the Router tags with ThemeProvider tags and set its theme attribute to {theme}