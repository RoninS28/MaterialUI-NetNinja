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

<!--! ============================================================================================================== -->
Lesson 7 Error for makeStyles
textField is given className of classes object, yet the changes are not showing up. Only the height attribute is getting reflected. Please look into it

<!--! ============================================================================================================== -->

Lesson 9 Using JSON Server
For installing the json server <!--? npm install -g json-server -->
Now, we created a file of data called db.json and we link that file to the json server as follows
<!--? npx json-server --watch public/data/db.json --port 8000 -->
<!--! ============================================================================================================== -->

Lesson 10 Grid System
Grid system is by default of 12 units
By default, grid items are aligned next to each other in a row rather than on top of one another
<Grid container> </Grid>  so that the grid wrapper is formed
<Grid item> </Grid> to tell that this is a grid item

<!--! ============================================================================================================== -->
Lesson 13 Permanent Drawer
We created a Layout function and wrapped it around the Switch tags in App.js, below the Router
In the Layout function, we can access the children using {children} props and specify it in the esx
For Drawer component, it has preqritten css,which we override using classes={{paper: {classes.drawerPaper}}}
here, we override the paper property of the Drawer, which is prewritten by material ui

<!--! ============================================================================================================== -->
Lesson 14 Lists and List Items
With the help of the useLocation from the react router, we can access the current path of the website using obj.pathname

<!--! ============================================================================================================== -->
Lesson 16 App Bars
css function to calculate is  width: `calc(100% - ${drawerWidth}px)`

What was happening is that the children were going below the navbar
fir that we made a div above the children and assigned it a toolbar class. Then in the useStyles we introuced a toolbar key and its value
was theme.mixins.toolbar. This assigns the properties of toolbar which we used to the particular class

For the date, we installed a npm package  <!--? npm install date-fns -->
<!--! ============================================================================================================== -->
Lesson 18 React Masonry Css
The problem was that in the grid system when a particular post is long enough, the next row components come down below it, leaving a vertical space which is not appealing. <!--? npm i react-masonry-css -->


