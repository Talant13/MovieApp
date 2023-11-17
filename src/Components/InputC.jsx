import React from "react";
import { InputGroup, Input, Button } from "reactstrap";

export default function InputC({ handleChange, inputValue, handleSearch }) {
  return (
    <InputGroup>
      <Input
        placeholder="Type movie name..."
        onChange={handleChange}
        value={inputValue}
      />
      <Button color="secondary" onClick={() => handleSearch()}>
        Search
      </Button>
    </InputGroup>
  );
}
