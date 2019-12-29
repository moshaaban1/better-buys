import Home from "./pages/home/index";
import Shop from "./pages/shop/index";
import ShopCategory from "./pages/shop-category/index";
import SignIn from "./pages/signin/index";
import SignUp from "./pages/signup/index";
import Checkout from "./pages/checkout/index";
import NotFound from "./pages/404/index";

const routes = [
   {
      path: "/",
      component: Home
   },
   {
      path: "/shop/",
      component: Shop
   },
   {
      path: "/shop/:category",
      component: ShopCategory
   },
   {
      path: "/signIn",
      component: SignIn
   },
   {
      path: "/signUp",
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
