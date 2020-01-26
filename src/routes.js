import { lazy } from "react";

const Home = lazy(() => import("./pages/home/index"));
const Shop = lazy(() => import("./pages/shop/index"));
const SignIn = lazy(() => import("./pages/signin/index"));
const SignUp = lazy(() => import("./pages/signup/index"));
const Checkout = lazy(() => import("./pages/checkout/index"));
const NotFound = lazy(() => import("./pages/404/index"));

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
      exact: true,
      component: SignIn
   },
   {
      path: "/signUp",
      auth: true,
      exact: true,
      component: SignUp
   },
   {
      path: "/checkout",
      exact: true,
      component: Checkout
   },
   {
      path: "*",
      component: NotFound
   }
];

export default routes;
