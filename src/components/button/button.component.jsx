import React from "react";

export default function Button({ color, size, children, clicked, width }) {
   const btnStyle = {
      border: "none",
      cursor: "pointer",
      outline: "none",
      width: width
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
         btnStyle.padding = "20px 35px";
         break;
      case "md":
         btnStyle.padding = "15px 30px";
         break;
      default:
         btnStyle.padding = "10px 20px";
   }
   return (
      <button className="btn" style={btnStyle} onClick={clicked}>
         {children}
      </button>
   );
}
