'use client';
import React from 'react';

import { useState } from 'react';
import GlobalButton from './GlobalButton';
import Link from 'next/link';

export default function GlobalFooter() {
  return (
    <footer
      id='contact'
      className=' mt-10 w-full bg-neutral-950 px-3 py-8 text-neutral-200'
    >
      <div className=' m-auto w-full max-w-screen-2xl'>
        <div className='flex flex-col  gap-20 md:flex-row md:justify-between '>
          <div className=' w-full md:max-w-2xl'>
            <span className=' text-4xl font-bold'>Contact Me</span>
            <div className='  mt-20 flex w-full  flex-col gap-7'>
              <div className=' grid grid-cols-2'>
                <span>Address:</span>
                <span className=' flex flex-col gap-4'>
                  Room number G 115, Uttley House, Chancellors Way, Fallowfield,
                  Manchester M146NN
                </span>
              </div>
              <div className=' grid grid-cols-2'>
                <span>Phone:</span>
                <span>+44 0788469329</span>
              </div>
              <div className=' grid grid-cols-2'>
                <span>Email:</span>
                <span>swarnalinag.kathak09@gmail.com</span>
              </div>
            </div>
          </div>
          <div className=' grid w-full grid-cols-2 md:max-w-2xl'>
            <span>SOCIALS</span>
            <span className=' flex flex-col gap-2'>
              <Link
                href='https://www.instagram.com/_swarnaliiii_/'
                className='cursorReduce '
                target='_blank'
              >
                Instagram
              </Link>

              <Link
                href='https://www.linkedin.com/in/swarnali-nag/'
                className='cursorReduce '
                target='_blank'
              >
                LinkedIn
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
