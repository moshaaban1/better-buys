import React from "react";
import Categories from "../../components/categories/categories.component";
import { Container } from "@material-ui/core";

const Home = () => (
   <main>
      <Container>
         <Categories />
      </Container>
   </main>
);

export default Home;
