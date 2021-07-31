import React from "react";
import { Input } from "@chakra-ui/react"

const Field = ({ field, fieldChanged, type, value }) => {
  return (
    <div key={field._uid}>
      <label htmlFor={field._uid}>{field.label}</label>
      <Input
      variant="filled" placeholder="Filled"
        type={type || field.component}
        id={field._uid}
        name={field._uid}
        value={value}
        onChange={(e) => {
          // Notify the main state list of the new value
          fieldChanged(field._uid, e.target.value);
        }}
      />
    </div>
  );
};

export default Field;
