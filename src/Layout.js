import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import NavComponent from "./Components/NavbarComponent";

export default function Layout() {
  return (
    <div>
      <NavComponent />

      <Outlet />

      <Footer />
    </div>
  );
}
