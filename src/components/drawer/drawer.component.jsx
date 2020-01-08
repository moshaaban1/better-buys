import React from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "../../redux/cart/cart.actions";
import "./drawer.styles.scss";

function Drawer(props) {
   const handleToggleDrawer = () => {
      props.dispatch(toggleDrawer());
   };

   const handleChildClick = e => {
      e.stopPropagation();
   };

   return (
      <div
         className={
            props.drawerStatus ? "drawer-container active" : "drawer-container"
         }
         onClick={handleToggleDrawer}
      >
         <div
            className={
               "drawer " +
               props.direction +
               (props.drawerStatus ? " active " : "")
            }
            onClick={handleChildClick}
         >
            Hello World
         </div>
      </div>
   );
}

const mapStateToProps = state => ({
   drawerStatus: state.cart.drawerStatus
});

export default connect(mapStateToProps)(Drawer);
