import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <article className="w-full overflow-hidden rounded-lg">
      <div className="caption-card">
        <p className="caption">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          odio totam architecto aperiam. Neque architecto qui in ducimus sint
          laboriosam quod quo nihil minima fugit accusamus officia omnis
          repellendus assumenda, ab quas, ex vel ut! Exercitationem culpa odit
          accusantium totam nisi. Cum.
        </p>
      </div>
      <div className="flex py-2 px-5 items-center mt-3 w-full justify-between">
        <div className="flex items-center gap-2">
          <span>
            <img
              src="https://www.stefantell.se/blog/wp-content/uploads/2012/06/dramatic-portrait-using-flagged-main-light.jpg"
              alt="profile"
              className="w-10 object-cover h-10 rounded-full"
            />
          </span>
          <span className="font-Worksans-SemiBold">Joel Steven</span>
        </div>
        <div>
            <Link className="text-sm duration-150 dark:bg-dark-70 dark:text-black dark:font-Worksans-SemiBold  bg-dark-10 text-white px-5 pt-2.5 pb-3 rounded-lg  ">
                Read full story
            </Link>
        </div>
      </div>
    </article>
  );
}
