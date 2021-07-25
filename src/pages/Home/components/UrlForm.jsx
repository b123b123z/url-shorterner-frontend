import React, { useState } from 'react';
import styled from 'styled-components';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const UrlForm = (props) => {
  const [longUrl, setLongUrl] = useState();

  const handleChange = (event) => {
    setLongUrl(event.target.value);
  };

  const handleClick = () => {
    props.setLongUrl(longUrl);
  };

  return (
    <FormContainer>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">URL</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          labelWidth={60}
          onChange={handleChange}
        />
      </FormControl>
      <ButtonContainer>
        <Button variant="outlined" color="primary" onClick={handleClick}>Generate short URL</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
`;

const ButtonContainer = styled.div`

    margin-top: 30px;
    width: 30%;
`;

export default UrlForm;
