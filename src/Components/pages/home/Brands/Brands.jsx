import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";

export default function Brands() {
  const brands = [
    {
      title: "adobe",
      light: "../../../../../public/images/icons/adobe.png",
      dark: "../../../../../public/images/icons/adobe-dark.png",
    },
    {
      title: "amazon",
      light: "../../../../../public/images/icons/amazon.png",
      dark: "../../../../../public/images/icons/amazon-dark.png",
    },
    {
      title: "netflix",
      light: "../../../../../public/images/icons/nextflix.png",
      dark: "../../../../../public/images/icons/nextflix-dark.png",
    },
    {
      title: "notion",
      light: "../../../../../public/images/icons/notion.png",
      dark: "../../../../../public/images/icons/notion-dark.png",
    },
    {
      title: "zaiper",
      light: "../../../../../public/images/icons/zaiper.png",
      dark: "../../../../../public/images/icons/zaiper-dark.png",
    },
    {
      title: "zoom",
      light: "../../../../../public/images/icons/zoom.png",
      dark: "../../../../../public/images/icons/zoom-dark.png",
    },
    {
      title: "spotify",
      light: "../../../../../public/images/icons/spotify.png",
      dark: "../../../../../public/images/icons/spotify-dark.png",
    },
  ];
  const { isDark } = useSelector((state) => state.theme);
  return (
    <section className="my-[200px] container relative lg:h-[200px] child:min-h-[80px] child:lg:h-full dark:bg-dark-15 lg:flex-row flex-col shadow-lg bg-white rounded-lg flex items-center px-4">
      {_.map(brands, (brand) => (
        <div className="flex w-full h-full items-center justify-center">
          <span>
            <img src={isDark ? brand.dark : brand.light} alt="" />
          </span>
        </div>
      ))}
    </section>
  );
}
