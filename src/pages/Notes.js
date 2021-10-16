import React, { useEffect, useState } from 'react'
import { Grid, Paper, Container } from '@mui/material'
// import { Container } from '@mui/material/Container'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes').then(res => res.json()).then(data => setNotes(data))
  }, [])//[] so that it only runs once


  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id);
    setNotes(newNotes);
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }


  return (
    <Container>

      {/* <Grid container spacing={3}>{/* base spacing in material ui  is 8px. This is multiplied by 3 


        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid> */}


      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >

        {notes.map(note => (
          <div key={note.id} >
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
