import Image from 'next/image';
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div>
      <div className='flex justify-center my-16 px-4'>
        <div className='max-w-7xl w-full text-center md:text-left'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
            <div className='flex-1'>
              <h1 className='text-3xl md:text-5xl font-bold mb-4'>{title}</h1>
              <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300'>{subtitle}</p>
            </div>
            <div className='flex-1 flex justify-center md:justify-end'>
              <Image
                src='/images/hero.png'
                alt='Hero Image'
                width={500}
                height={500}
                className='rounded-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
