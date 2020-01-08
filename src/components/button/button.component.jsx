import React from "react";

export default function Button({
   color,
   size,
   children,
   width,
   transform,
   ...otherProps
}) {
   const btnStyle = {
      border: "none",
      cursor: "pointer",
      outline: "none",
      width: width,
      marginBottom: "10px"
   };
   switch (transform) {
      case "uppercase":
         btnStyle.textTransform = "uppercase";
         break;
      case "capitalize":
         btnStyle.textTransform = "capitalize";
         break;
      default:
         btnStyle.textTransform = "lowercase";
   }
   switch (color) {
      case "dark":
         btnStyle.backgroundColor = "#000";
         btnStyle.color = "#fff";
         break;
      case "primary":
         btnStyle.backgroundColor = "#3f51b5";
         btnStyle.color = "#fff";
         break;
      default:
         btnStyle.backgroundColor = "#ddd";
   }
   switch (size) {
      case "lg":
         btnStyle.padding = "20px 35px";
         break;
      case "md":
         btnStyle.padding = "15px 30px";
         break;
      default:
         btnStyle.padding = "10px 20px";
   }
   return (
      <button className="btn" style={btnStyle} {...otherProps}>
         {children}
      </button>
   );
}
