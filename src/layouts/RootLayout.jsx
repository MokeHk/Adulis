import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterMenu from "../components/FooterMenu";
import { Box } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterMenu />
    </div>
  );
}
