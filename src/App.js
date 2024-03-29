import './App.css';
import { Typography, AppBar, Button, CssBaseline, Toolbar, TextField } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/system';
// import FormControl from '@mui/material/FormControl';
import React, {useState} from 'react';

const StartWrapper = styled('div')(
  () => `
  padding: 120px;
  background-color: rgb(248, 248, 255);
  display: flex;
  flex-direction: column;
`,
); 

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);


  const handleChange = (event, setFunction) => {
    const inputValue = event.target.value;
    // console.log("nnnnn", inputValue)
    const reg = new RegExp("^[a-zA-Z ]*$")
    if (reg.test(inputValue)) {
      setFunction(inputValue); 
      setIsSubmitDisabled(firstName.trim() === '' || lastName.trim() === '');
    }
  };

  const handleBlur = (event, setFunction) => {
    if (event.target.value.trim() === '') {

      setFunction('');
      setIsSubmitDisabled(true);
    }
  };

  const handleSubmit = () => {
    alert("Form Submitted");
    setFirstName("");
    setLastName("");
    setIsSubmitDisabled(true);
  }
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <StartWrapper>
          {/* <FormControl> */}
          <TextField
              required
              id="outlined-required"
              label='First Name'
              value={firstName}
              onChange={(e) => handleChange(e, setFirstName)}
              onBlur={(e) => handleBlur(e, setFirstName)}
              sx={{ mb: 2 }}
            />
          <TextField
              required
              id="outlined-required"
              label='Last Name'
              value={lastName}
              onChange={(e) => handleChange(e, setLastName)}
              onBlur={(e) => handleBlur(e, setLastName)}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              disabled={isSubmitDisabled}
              onClick={handleSubmit}
            >
              Submit
            </Button>

          {/* </FormControl> */}
        </StartWrapper>
      </main>
    </>
  );
}

export default App;
