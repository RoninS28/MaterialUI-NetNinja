import React from 'react'
import { Card, CardHeader, CardContent, IconButton, Typography, Avatar } from '@mui/material'
import { DeleteOutline } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import { blue, yellow, pink, green, red } from '@mui/material/colors'

// argumnetal useStyles
const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category == 'work') {
                return '2px solid red'
            }
            else if (note.category == 'money') {
                return '2px solid green'
            }
            else if (note.category == 'todos') {
                return '2px solid gold'
            }
            else if (note.category == 'reminders') {
                return '2px solid dodgerBlue'
            }
        }
    },
    avatar: {
        "&&": {

            backgroundColor: (note) => {
                if (note.category == 'work') {
                    return red[700]
                }
                else if (note.category == 'money') {
                    return green[500]
                }

                else if (note.category == 'todos') {
                    return yellow[700]
                }
                return blue[500]
            }
        }
    }
})

export default function NoteCard({ note, handleDelete }) {


    const classes = useStyles(note)




    return (
        <div>
            <Card elevation={3} className={classes.test}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutline />
                        </IconButton>

                    }
                    title={note.title}
                    subheader={note.category}


                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}

                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}