import React from "react";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";


export function HomePage() {
  return (
    <TopSection>
      <Navbar useTransparent id="homePageNavbar"/>
    </TopSection>
  );
}
