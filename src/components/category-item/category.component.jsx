import React from "react";
import { useHistory } from "react-router-dom";
import "./category.style.scss";

export default function Category({ imageUrl, title, linkUrl }) {
   let history = useHistory();
   return (
      <div style={{ overflow: "hidden" }} onClick={() => history.push(linkUrl)}>
         <div
            className="category"
            style={{ backgroundImage: `url(${imageUrl})` }}
         >
            <div className="content">
               <div className="title">{title.toUpperCase()}</div>
               <span>SHOP NOW</span>
            </div>
         </div>
      </div>
   );
}
