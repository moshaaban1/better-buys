import React from "react";

import { InputGroup, Input, InputLabel } from "./form-input.styles";

const FormInput = ({ label, value, ...otherProps }) => (
   <InputGroup>
      <Input {...otherProps} value={value} />
      {label ? (
         <InputLabel shrink={value && value.length}>{label}</InputLabel>
      ) : null}
   </InputGroup>
);

export default FormInput;
