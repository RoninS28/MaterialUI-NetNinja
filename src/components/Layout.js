import { makeStyles } from "@mui/styles";
import React from "react";
import { Drawer, Typography } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router";
import { AppBar, Toolbar, Avatar } from "@mui/material";
import { format } from "date-fns";



const drawerWidth = 240

// earlier we were using an object of makestyles.
// Now instead we make it as a function which returns styles and in this way we can pass in arguments as well
const useStyles = makeStyles((theme) => {
    return {
        page: {
            "&&": {
                background: '#f9f9f9',
                width: '100%',
                padding: theme.spacing(3)
            }
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: "flex"
        },
        active: {
            "&&": {

                background: '#f4f4f4'
            }
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            "&&": {

                width: `calc(100% - ${drawerWidth}px)`
            }
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1 //this takes all the space available so tha other components only take up the space they require the least
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

const Layout = ({ children }) => {

    const history = useHistory()
    const classes = useStyles()
    const location = useLocation()


    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },

        {
            text: 'Create Notes',
            icon: <AddCircleOutlined color="secondary" />,
            path: '/create'
        }
    ]

    return (
        <div className={classes.root}>
            {/* appbar */}

            <AppBar
                className={classes.appbar}
                elevation={0}

            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar src="/mario-av.png" className={classes.avatar} />
                </Toolbar>
            </AppBar>




            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper
                }}


            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>

                {/* List links */}
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button //this makes a hover effect
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}

                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>


            <div className={classes.page}>
                <div className={classes.toolbar}>

                </div>

                {children}
            </div>
        </div>

    );
}

export default Layout;