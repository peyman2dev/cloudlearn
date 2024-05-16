import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard(props) {
  const courseUrl = `/course/${props.shortName}`;
  return (
    <article className="p-4 rounded-lg dark:bg-dark-15 bg-white shadow-sm">
      <header className="h-[146px]">
        <Link to={courseUrl}>
          <img src={`${props.cover}`} className="w-full h-[146px] rounded-md object-cover" alt="course" />
        </Link>
      </header>
      <main className="my-3">
        <Link to={courseUrl}>
          <h3 className="text-lg h-14 font-Worksans-SemiBold">{props.name}</h3>
        </Link>

        <Link>
          <p className="mt-3 line-clamp-3 dark:text-dark-60">
            {props.description}
          </p>
        </Link>
        <div className="my-2 text-teal-600">
            <p className="font-Worksans-Black text-2xl">
                {props.price}$
            </p>
        </div>
      </main>
      <footer className="child:py-4 child:w-full child:duration-150 space-y-2">
        <Link to={courseUrl} className="button block text-center primary border-b-4 border-[teal]">
          Buy now
        </Link>
        <button className="text-prime-10 rounded-lg bg-prime-10/10">
          Add to cart
        </button>
      </footer>
    </article>
  );
}
