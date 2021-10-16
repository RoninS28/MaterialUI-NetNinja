import { makeStyles } from "@mui/styles";
import React from "react";
import { Drawer, Typography } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router";



const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        "&&": {
            background: '#f9f9f9',
            width: '100%'
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
                    <Typography variant="h5">
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

                {children}
            </div>
        </div>

    );
}

export default Layout;