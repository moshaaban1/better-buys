import React from "react";

import { InputGroup, Input, InputLabel } from "./form-input.styles";

export default function FormInput({ label, value, ...otherProps }) {
   return (
      <InputGroup>
         <Input {...otherProps} />
         {label ? <InputLabel shrink={value.length}>{label}</InputLabel> : null}
      </InputGroup>
   );
}
