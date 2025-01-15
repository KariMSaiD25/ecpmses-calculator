// @ts-nocheck
import { Box, InputAdornment, Button, styled } from "@mui/material";
import "./create.css";
import TextField from "@mui/material/TextField";
import { purple , teal, gray, blue } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: teal[500],
  "&:hover": {
    backgroundColor: teal[700], 
    scale: "0.99",
  },
}));
function Create() {
  const {  items, setItems } = useOutletContext();

  const [title, setTitle] =useState('')
  const [price ,setPrice] =useState('')
 function  handleSubmit(){
   fetch('http://localhost:3100/mydata', {
     method: "post",
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({price,title})}
 )
//setItems((items) => [...items,{title,price}])

    setPrice('')
    setTitle('')
    
  }
  return (
    <Box sx={{ width: "390px" }} component={"form"}    >
      <TextField
      autoComplete="off"
  
        onChange={(e) => setTitle(e.target.value) }
        label="Transaction Title"
        fullWidth
      value={title}
        sx={{ mt: "22px", display: "flex" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">👉</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />
      <br />
      <TextField
    autoComplete="off"
      onChange={(e) => setPrice(e.target.value/1) }
    
        value={price}
        label="Amount"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "flex" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">💲</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />
      <ColorButton sx={{ mt: "22px" }} variant="contained" 
      onClick={() => title && price && handleSubmit()}
      
      >
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
}

export default Create;
