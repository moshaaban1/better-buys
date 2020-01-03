import React from "react";
import Categories from "../../components/categories/categories.component";
import { Container } from "@material-ui/core";

export default class Home extends React.Component {
   render() {
      return (
         <main>
            <Container>
               <Categories />
            </Container>
         </main>
      );
   }
}
