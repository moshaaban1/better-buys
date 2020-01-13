import React from "react";

import { CustomButton } from "./button.styles";

const Button = props => {
   // switch (color) {
   //    case "dark":
   //       btnStyle.backgroundColor = "#000";
   //       btnStyle.color = "#fff";
   //       break;
   //    case "primary":
   //       btnStyle.backgroundColor = "#3f51b5";
   //       btnStyle.color = "#fff";
   //       break;
   //    default:
   //       btnStyle.backgroundColor = "#ddd";
   // }
   return <CustomButton {...props}>{props.children}</CustomButton>;
};

export default Button;
