import React from "react";
import { TextField } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import InputAdornment from "@mui/material/InputAdornment";
import InventoryIcon from "@mui/icons-material/Inventory";

function UserInput(props) {
  function handleChange(event) {
    const { name, value } = event.target;

    //Checks if the user put in letters in Number field
    if (name === "Supply") {
      let newValue = value;
      if (isNaN(value)) {
        event.preventDefault();
        newValue = newValue.slice(0, -1); //removes last character typed
        event.target.value = newValue;
        alert("This input takes only number");
      }
    }

    //setting the value's of name to target.value which changes with onChange function as well as spreading the previous values
    props.setFormData((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <>
      <TextField
        name="Token"
        placeholder="Type in Token Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ContactPageIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
      ></TextField>
      <TextField
        name="Symbol"
        placeholder="Symbol"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CurrencyBitcoinIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
      ></TextField>

      <TextField
        name="Supply"
        placeholder="Total Supply"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InventoryIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
      ></TextField>
    </>
  );
}

export default UserInput;
