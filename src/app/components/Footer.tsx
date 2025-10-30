import { Divider } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <div>
      <div className='container mx-auto px-10 mt-16'>
        <footer className='rounded-t-xl py-6 text-center text-sm text-white bg-black'>
          <div className='grid grid-cols-3'>
            <div>Logo</div>
            <div>
              <div className='flex justify-center gap-4'>
                <Link href='/about-us' className='text-white text-lg'>
                  Nosotros
                </Link>
                <Link href='/services' className='text-white text-lg'>
                  Servicios
                </Link>
                <Link href='/contact' className='text-white text-lg'>
                  Contacto
                </Link>
              </div>
            </div>
            <div>
              <div className='flex justify-center gap-4'>
                <Link href='#' className='text-white text-lg'>
                  Política de privacidad
                </Link>
                <Link href='#' className='text-white text-lg'>
                  Términos de servicio
                </Link>
              </div>
            </div>
          </div>
          <Divider className='my-4' />
          &copy; {new Date().getFullYear()} ACA WEB. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
};
