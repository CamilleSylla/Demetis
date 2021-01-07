import React from "react";
import "../../style/Banner.scss";
import "../../style/Theme.scss";
import Text from "./Text";
import BannerMenu from "./Banner_Menu"
import BannerImg from "./BannerImg";

export default function Banner() {
  return (
    <header className="banner">
      <Text/>
      <div id="banner_spacing">
      </div>
      {/* <BannerMenu/> */}
      <BannerImg/>
    </header>
  );
}
