import React from "react";

import Button from "../../components/button/button.component";
import { NotFoundContainer, Title, PathName } from "./404.styles";

const NotFound = ({ location, history }) => (
   <NotFoundContainer>
      <PathName>{location.pathname} </PathName>
      <Title>404 NOT FOUND</Title>
      <Button inverted clicked={() => history.push("/")}>
         Back to Home Page
      </Button>
   </NotFoundContainer>
);

export default NotFound;
