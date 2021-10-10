import React from 'react'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { ButtonGroup } from '@mui/material'
import { Container } from '@mui/material'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
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

        // startIcon={<SendOutlinedIcon />}
        endIcon={<KeyboardArrowRightOutlinedIcon />}

      >Submit</Button>
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