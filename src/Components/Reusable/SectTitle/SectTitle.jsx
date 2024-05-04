import React from "react";
import { Link } from "react-router-dom";

export default function SectTitle({children,title,url}) {
  return (
    <div className="flex items-center lg:flex-row relative z-10 flex-col gap-3 lg:gap-0 justify-between">
      <div className="lg:w-[70%]">
        <p className="font-bold text-2xl">
     {title}
        </p>
        <p className="line-clamp-3 dark:text-dark-70 text-dark-20">
          {
          /* You can create a custom element with custom 'element-type' data type for caption*/
          // example : 
          // <div element-type="caption">This is a test caption</div>
          }

        {
        children.props['element-type'] === 'caption' && children.props.children
        }
        </p>
      </div>
      <div className="flex justify-end lg:w-auto w-full">
        <Link
        to={url}
          className="px-5 py-2 bg-white dark:bg-dark-15 rounded-md shadow-sm"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
