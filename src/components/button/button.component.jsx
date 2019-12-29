import React from "react";

export default function Button({ color, size, children, clicked }) {
   const btnStyle = {
      border: "none",
      cursor: "pointer",
      outline: "none"
   };
   switch (color) {
      case "dark":
         btnStyle.backgroundColor = "#000";
         btnStyle.color = "#fff";
         break;
      default:
         btnStyle.backgroundColor = "#ddd";
   }
   switch (size) {
      case "lg":
         btnStyle.padding = "20px 25px";
         break;
      case "md":
         btnStyle.padding = "15px 20px";
         break;
      default:
         btnStyle.padding = "10px 15px";
   }
   return (
      <button className="btn" style={btnStyle} onClick={clicked}>
         {children}
      </button>
   );
}
