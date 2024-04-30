import Tippy from "@tippyjs/react";
import React from "react";
import "tippy.js/animations/scale.css";

export default function Tooltip({ children, tip, visible }) {
  return (
    <Tippy
      animation="scale"
      className="dark:bg-white rounded-lg px-2 text-sm bg-dark-10"
      content={"HELLO WORLD"}
      arrow={true}
      visible={visible}
    >
      {children}
    </Tippy>
  );
}
