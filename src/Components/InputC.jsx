import React from "react";
import { InputGroup, Input, Button } from "reactstrap";

export default function InputC({ handleChange, inputValue, handleSearch }) {
  return (
    <div
      style={{
        marginTop: "40px",
        marginBottom: "40px",
        display: "flex",
        width: "40%",
        height: "40px",
        margin: "auto",
      }}>
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
    </div>
  );
}
