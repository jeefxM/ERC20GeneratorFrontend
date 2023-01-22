import React, { useState } from "react";

function FormDataComponent() {
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function handleKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/[^\d]/.test(keyValue)) {
      event.preventDefault();
    }
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
        onKeyPress={handleKeyPress}
      ></TextField>
    </>
  );
}

export default FormDataComponent;
