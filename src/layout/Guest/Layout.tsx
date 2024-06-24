import { ReactElement } from "react";
import HeaderLayout from "./Header";
import FooterLayout from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout(): ReactElement {
  return(
    <>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </>
  )
}