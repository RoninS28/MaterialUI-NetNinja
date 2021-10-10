import React from 'react'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { ButtonGroup } from '@mui/material'
import { Container } from '@mui/material'

export default function Create() {
  return (
    <Container>


      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <Button type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log("youi clicked me")}
      >Submit</Button>

      {/* <Button type="submit" color="primary">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">Submit</Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>Four</Button>
      </ButtonGroup> */}
    </Container>
  )
}

//       Create page
{/* <Typography variant="h1" color="secondary" align="center" > */ }
// Create a new note
// </Typography>
//<Typography color="error" align="center" noWrap>{/*noWrap makes sure that the text does not go onto the next line and stays on the same line*/}
//Create a new note  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, quas aut. Id quibusdam, minus nulla, sint maxime amet, saepe laudantium repudiandae explicabo error labore molestiae neque nemo ratione eum ipsum mollitia. Iusto eum animi saepe iure quo, error a cumque molestiae quas doloribus aperiam illum expedita iste, dolorem tempore assumenda?
// </Typography>