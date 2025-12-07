import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Faq from "../Pages/FAQ/Faq";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        hydrateFallbackElement: <h1>Loading ...</h1>,
        Component: Home,
      },
      {
        path:"bookings",
        Component:MyBookings
      },
      {
        path:"faq",
        Component:Faq
      },
      {
        path:"contact",
        Component:ContactUs
      }
    ],
  },
]);
