'use client';
import React from 'react';
import { Card, CardHeader, CardBody } from '@heroui/react';

interface CardAboutProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

export const CardAbout = ({ icon, title, description }: CardAboutProps) => {
  return (
    <div>
      <Card className='py-4 bg-[#B9FF66] h-full'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>{icon}</CardHeader>
        <CardBody className='overflow-visible py-2'>
          <h1 className='text-center italic'>{title}</h1>
          <p className='text-center text-gray-600'>{description}</p>
        </CardBody>
      </Card>
    </div>
  );
};
