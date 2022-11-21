import React from "react";
import { Outlet } from "react-router-dom";
// import Footer from "./Components/Footer";
// import NavComponent from "./Components/NavbarComponent";

export default function AdminLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
