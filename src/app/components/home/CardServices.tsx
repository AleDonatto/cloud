'use client';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider } from '@heroui/react';
import Image from 'next/image';

interface CardServicesProps {
  title: string;
  description: string;
  color: 'gray' | 'green' | 'black';
  imageSrc: string;
}

export const CardServices = ({ title, description, color, imageSrc }: CardServicesProps) => {
  return (
    <div>
      <Card
        className={`
            shadow-lg
            ${color === 'green' ? 'bg-[#B9FF66]' : ''}
            ${color === 'black' ? 'bg-[#191A23]' : ''}
            ${color === 'gray' ? 'bg-[#F3F3F3]' : ''}
        `}
      >
        <CardHeader className='flex gap-3'>
          <div className='flex flex-col'>
            <p
              className={`text-xl font-bold px-4 rounded-md
                ${color === 'black' ? 'text-black bg-[#B9FF66]' : ''} 
                ${color === 'gray' ? 'bg-[#B9FF66] text-black' : ''} 
                ${color === 'green' ? 'bg-[#F3F3F3] text-black' : ''}`}
            >
              {title}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className='flex justify-between items-center'>
            <p className={`text-sm ${color === 'black' ? 'text-white' : ''}`}>{description}</p>
            <Image src={imageSrc} alt={title} width={100} height={100} />
          </div>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};
