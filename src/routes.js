import Home from "./pages/home/index";
import Shop from "./pages/shop/index";
import SignIn from "./pages/signin/index";
import SignUp from "./pages/signup/index";
import Checkout from "./pages/checkout/index";
import NotFound from "./pages/404/index";

const routes = [
   {
      path: "/",
      component: Home,
      exact: true
   },
   {
      path: "/shop/",
      component: Shop
   },
   {
      path: "/signIn",
      auth: true,
      component: SignIn
   },
   {
      path: "/signUp",
      auth: true,
      component: SignUp
   },
   {
      path: "/checkout",
      component: Checkout
   },
   {
      path: "*",
      component: NotFound
   }
];

export default routes;
