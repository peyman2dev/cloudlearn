import { ArrowRight } from 'iconsax-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Benefit({index,title,content}) {
  return (
    <article className='p-6 bg-white space-y-4 relative z- dark:bg-dark-20 flex flex-col justify-between shadow-md  rounded-lg'>
      <header className='w-full dark:text-dark-60 font-Worksans-Bold text-5xl text-dark-20 flex items-center justify-end'>
        <p>#0{index}</p>
      </header>
      <main>
        <h4 className='font-Worksans-SemiBold text-lg'>
          {title}
        </h4>
        <p className="mt-5">
          {content}
        </p>
      </main>
      <footer className='flex w-full justify-end'>
        <Link className='-rotate-45 text-prime-10 px-3 py-1.5 rounded-md'>
        <ArrowRight />
        </Link>
      </footer>
    </article>
  )
}
