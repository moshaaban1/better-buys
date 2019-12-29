import React from "react";
import Collection from "../collection-container/collection-container.component";
import "./collections.styles.scss";

export default function Collections(props) {
   return (
      <div className="collections-container">
         {props.collections.map(collection => {
            if (collection.items.length) {
               return (
                  <Collection
                     key={collection.title}
                     title={collection.title}
                     items={collection.items}
                  />
               );
            }
         })}
      </div>
   );
}
