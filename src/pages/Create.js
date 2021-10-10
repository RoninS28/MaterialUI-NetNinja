import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { ButtonGroup } from '@mui/material'
import { Container } from '@mui/material'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField'



const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    // height: 100
    // display: 'block'
  },

});

export default function Create() {

  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    setDetailsError(false)
    setDetailsError(false)
    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }

    if (title && details) {
      console.log(details)
    }

  }


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

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        >
        </TextField>
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={detailsError}
          multiline
          rows={4}
        >
        </TextField>
        <Button
          type="submit"
          color="secondary"

          variant="outlined"
          onClick={() => console.log("youi clicked me")}

          endIcon={<KeyboardArrowRightOutlinedIcon />}

        >Submit </Button>
      </form>




      <br />



    </Container>
  )
}


{/* <AcUnitOutlinedIcon />
<AcUnitOutlinedIcon color="primary" fontSize="large" />
<AcUnitOutlinedIcon color="secondary" fontSize="small" />
<AcUnitOutlinedIcon color="action" fontSize="small" />
<AcUnitOutlinedIcon color="error" fontSize="small" />
<AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}