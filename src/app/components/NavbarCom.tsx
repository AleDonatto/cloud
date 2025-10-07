'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

export const NavbarCom = () => {
  return (
    <div>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <Link href='/'>
            <p className='font-bold text-inherit'>ACME</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='end'>
          <NavbarItem>
            <Link color='foreground' href='/about-us'>
              Nosotros
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current='page' href='/services'>
              Servicios
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='/pricing'>
              Precios
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
