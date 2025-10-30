'use client';
import React, { useState } from 'react';
import { Hero } from '../components/home/Hero';
import { Button } from '@heroui/react';

export default function ContactView() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí podrías enviar los datos a una API o servicio de correo (por ejemplo, Formspree o tu backend)
  };
  return (
    <div>
      <Hero
        title='Conectamos tecnología y estrategia para construir presencia digital efectiva'
        subtitle='Somos un equipo apasionado por crear sitios web que combinan diseño, rendimiento y posicionamiento SEO.'
      />
      <section className='py-20 bg-white dark:bg-gray-900'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Hablemos sobre tu próximo proyecto web 🚀
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 mb-12'>
            Cuéntanos qué necesitas: desarrollo, hosting o mantenimiento. Nuestro equipo te
            responderá lo antes posible con una propuesta personalizada.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
            {/* Formulario */}
            <form onSubmit={handleSubmit} className='space-y-6 text-left'>
              <div>
                <label className='block text-gray-700 dark:text-gray-200 font-medium mb-2'>
                  Nombre
                </label>
                <input
                  type='text'
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-600 focus:outline-none'
                />
              </div>
              <div>
                <label className='block text-gray-700 dark:text-gray-200 font-medium mb-2'>
                  Correo electrónico
                </label>
                <input
                  type='email'
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-600 focus:outline-none'
                />
              </div>
              <div>
                <label className='block text-gray-700 dark:text-gray-200 font-medium mb-2'>
                  Mensaje
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-600 focus:outline-none'
                />
              </div>

              <Button className='text-white bg-black mt-4 mx-auto block'>Enviar Mensaje</Button>
            </form>

            {/* Información lateral */}
            <div className='text-left space-y-6'>
              <h3 className='text-2xl font-semibold'>Datos de contacto</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Escríbenos o agenda una llamada con nuestro equipo técnico. Nos encantará conocer tu
                proyecto.
              </p>
              <ul className='text-gray-700 dark:text-gray-200 space-y-2'>
                <li>
                  <strong>Correo:</strong> contacto@tusitio.com
                </li>
                <li>
                  <strong>Teléfono:</strong> +52 55 1234 5678
                </li>
                <li>
                  <strong>Ubicación:</strong> Acapulco, Gro., México
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
