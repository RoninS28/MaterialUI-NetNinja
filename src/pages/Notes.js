import React, { useEffect, useState } from 'react'
import { Grid, Paper, Container } from '@mui/material'
// import { Container } from '@mui/material/Container'

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes').then(res => res.json()).then(data => setNotes(data))
  }, [])//[] so that it only runs once
  return (
    <Container>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3} >
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Paper>4</Paper>
        </Grid>
      </Grid> */}
      <Grid container>

        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Paper>

              {note.title}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
