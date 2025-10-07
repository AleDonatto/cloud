'use client';
import React from 'react';
import { Code2, Server, Search, Shield } from 'lucide-react';
import { Button } from '@heroui/react';
import { Hero } from '../components/home/Hero';

export default function ServicesView() {
  return (
    <div>
      <Hero
        title='Conectamos tecnología y estrategia para construir presencia digital efectiva'
        subtitle='Somos un equipo apasionado por crear sitios web que combinan diseño, rendimiento y posicionamiento SEO.'
      />
      <div className='container mx-auto px-10'>
        <section className='py-20'>
          <div className='max-w-6xl mx-auto px-6 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Soluciones Web Integrales</h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 mb-12'>
              Combinamos diseño, desarrollo y optimización para crear sitios que no solo se ven
              bien, sino que también generan resultados.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              {/* Servicio 1 */}
              <div className='bg-[#F3F3F3] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow'>
                <Code2 className='w-12 h-12 mx-auto text-blue-600 mb-4' />
                <h3 className='text-xl font-semibold mb-2'>Desarrollo a Medida</h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  Creamos sitios web personalizados en Next.js y React, con rendimiento,
                  escalabilidad y diseño moderno.
                </p>
              </div>

              {/* Servicio 2 */}
              <div className='bg-[#F3F3F3] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow'>
                <Server className='w-12 h-12 mx-auto text-green-600 mb-4' />
                <h3 className='text-xl font-semibold mb-2'>Hosting Optimizado</h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  Alojamiento seguro, rápido y escalable con uptime garantizado y soporte técnico
                  personalizado.
                </p>
              </div>

              {/* Servicio 3 */}
              <div className='bg-[#F3F3F3] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow'>
                <Search className='w-12 h-12 mx-auto text-purple-600 mb-4' />
                <h3 className='text-xl font-semibold mb-2'>Optimización SEO</h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  Implementamos estrategias SEO on-page y técnicas para mejorar tu visibilidad y
                  posicionamiento en Google.
                </p>
              </div>

              {/* Servicio 4 */}
              <div className='bg-[#F3F3F3] rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow'>
                <Shield className='w-12 h-12 mx-auto text-red-600 mb-4' />
                <h3 className='text-xl font-semibold mb-2'>Mantenimiento & Seguridad</h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  Monitoreo constante, actualizaciones automáticas y copias de seguridad para
                  proteger tu sitio 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className='mt-16'>
          <h3 className='text-2xl font-semibold mb-4 text-center'>
            ¿Listo para impulsar tu negocio online?
          </h3>
          <Button className='text-white bg-black mt-4 mx-auto block'>Contáctanos</Button>
        </div>
      </div>
    </div>
  );
}
