import React from "react";
import DefaultLayout from "../../layouts/default";
import Categories from "../../components/categories/categories.component.jsx";
import { Container } from "@material-ui/core";

export default class Home extends React.Component {
   render() {
      return (
         <DefaultLayout>
            <main>
               <Container>
                  <Categories />
               </Container>
            </main>
         </DefaultLayout>
      );
   }
}
