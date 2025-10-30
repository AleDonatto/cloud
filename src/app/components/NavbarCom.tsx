'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';

export const NavbarCom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Navbar
        shouldHideOnScroll
        className='bg-black rounded-b-xl'
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent justify='start'>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className='sm:hidden text-white'
          />
          <NavbarBrand>
            <Link href='/' className='text-white font-bold text-xl'>
              ACA WEB
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* <NavbarBrand>
          <Link href='/'>
            <p className='font-bold text-inherit text-white'>ACA WEB</p>
          </Link>
        </NavbarBrand> */}
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

        {/* Menú desplegable (mobile / tablet) */}
        {isMenuOpen && (
          <NavbarMenu className='bg-black text-white rounded-xl'>
            <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
              <Link href='/' className='w-full text-lg block py-2 hover:text-gray-300'>
                Inicio
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem onClick={() => setIsMenuOpen(false)}>
              <Link href='/about-us' className='w-full text-lg block py-2 hover:text-gray-300'>
                Nosotros
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
                href='/services'
                className='w-full text-lg block py-2 hover:text-gray-300'
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link
                href='/contact'
                className='w-full text-lg block py-2 hover:text-gray-300'
                onClick={() => setIsMenuOpen(false)}
              >
                Contáctanos
              </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        )}

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
