'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

export const NavbarCom = () => {
  return (
    <div>
      <Navbar shouldHideOnScroll className='bg-black rounded-b-xl'>
        <NavbarBrand>
          <Link href='/'>
            <p className='font-bold text-inherit text-white'>ACA WEB</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='end'>
          <NavbarItem>
            <Link
              color='foreground'
              href='/about-us'
              className='text-white text-lg hover:text-gray-300'
            >
              Nosotros
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              aria-current='page'
              href='/services'
              className='text-white text-lg hover:text-gray-300'
            >
              Servicios
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color='foreground'
              href='/contact'
              className='text-white text-lg hover:text-gray-300'
            >
              Contáctanos
            </Link>
          </NavbarItem>
        </NavbarContent>
        {/* <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <Link href='#'>Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color='primary' href='#' variant='flat'>
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent> */}
      </Navbar>
    </div>
  );
};
