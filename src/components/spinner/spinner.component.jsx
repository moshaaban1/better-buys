import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const Spinner = () => (
   <SpinnerOverlay>
      <SpinnerContainer>Loading...</SpinnerContainer>
   </SpinnerOverlay>
);

export default Spinner;
