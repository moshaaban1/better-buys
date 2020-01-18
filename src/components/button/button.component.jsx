import React from "react";

import { CustomButton } from "./button.styles";

const Button = props => {
   return <CustomButton {...props}>{props.children}</CustomButton>;
};

export default Button;
