import React, { Component } from "react";

import {
   ErrorImageOverlay,
   ErrorImageContainer,
   ErrorImageText
} from "./error-boundary.styles";

export default class ErrorBoundary extends Component {
   state = {
      hasError: false
   };

   static getDerivedStateFromError(error) {
      return { hasError: true };
   }

   componentDidCatch(error, info) {
      console.log(error);
   }

   render() {
      return this.state.hasError ? (
         <ErrorImageOverlay>
            <ErrorImageContainer imageUrl={"https://i.imgur.com/yW2W9SC.png"} />
            <ErrorImageText>Sorry this page is broken</ErrorImageText>
         </ErrorImageOverlay>
      ) : (
         this.props.children
      );
   }
}
