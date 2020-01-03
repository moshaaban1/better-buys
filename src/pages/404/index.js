import React from "react";
import Button from "../../components/button/button.component";
import "./404.style.scss";

export default function NotFound({ location, history }) {
   return (
      <main>
         <div className="not-found">
            <span className="path-name">{location.pathname} </span>
            <h1 className="title">404 NOT FOUND</h1>
            <Button color="dark" size="md" clicked={() => history.push("/")}>
               Back to Home Page
            </Button>
         </div>
         ;
      </main>
   );
}
