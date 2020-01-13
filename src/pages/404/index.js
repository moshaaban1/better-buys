import React from "react";

import Button from "../../components/button/button.component";
import "./404.style.scss";

const NotFound = ({ location, history }) => (
   <main>
      <div className="not-found">
         <span className="path-name">{location.pathname} </span>
         <h1 className="title">404 NOT FOUND</h1>
         <Button inverted clicked={() => history.push("/")}>
            Back to Home Page
         </Button>
      </div>
   </main>
);

export default NotFound;
