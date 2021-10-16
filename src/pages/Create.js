import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Container } from '@mui/material';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { Box, margin } from '@mui/system';
import { Radio, RadioGroup } from '@mui/material';
import { FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { useHistory } from 'react-router';

const usestyles = theme => ({
  buttonPadding: {
    padding: '30px',
  },
  field: {
    // paddingTop: '20px',
    // paddingBottom: '20px',
    backgroundColor: 'red',
    margin: '20px',
    backgroundColor: 'red',
    // height: 100
    // display: 'block'
  }
});


const useStyles = makeStyles({
  field: {
    "&&": {
      // paddingTop: '20px',
      // padding: '100px',
      // backgroundColor: 'red',
      margin: '10px',
      // margin: 100
      // display: 'block'

    }
  },

});

export default function Create() {

  const classes = useStyles()
  const history = useHistory()
  const textfieldStyle = {
    // margin: '20px'
  }
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')


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
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          title, details, category
        })
      }).then(() => history.push('/'))
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
          style={textfieldStyle}

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
          style={textfieldStyle}

        >
        </TextField>

        <FormControl className={classes.field}>

          <FormLabel>Note Category</FormLabel>

          <RadioGroup color="primary" value={category} onChange={(e) => setCategory(e.target.value)} >

            <FormControlLabel color="primary" value="money" control={<Radio />} label="Money" />
            <FormControlLabel color="primary" value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel color="primary" value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel color="primary" value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <br />



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