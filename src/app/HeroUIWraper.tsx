'use client';
import { HeroUIProvider } from '@heroui/react';
import React from 'react';

export const HeroUIWraper = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <main>{children}</main>
    </HeroUIProvider>
  );
};
