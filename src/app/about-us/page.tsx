'use client';
import React from 'react';
import { Hero } from '../components/home/Hero';
import { CardAbout } from '../components/aboutus/CardAbout';
import { HeartHandshake, Lightbulb, Settings, ShieldCheck } from 'lucide-react';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';

export default function AboutUsView() {
  return (
    <div>
      <Hero
        title='Conectamos tecnología y estrategia para construir presencia digital efectiva'
        subtitle='Somos un equipo apasionado por crear sitios web que combinan diseño, rendimiento y posicionamiento SEO.'
      />
      <div className='container mx-auto px-10'>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // se anima una vez al 20% visible
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className=''
        >
          <h2 className='text-center my-16 text-gray-600 text-2xl italic'>
            &ldquo; Transmitir confianza, experiencia y propósito. Mostrar quién está detrás de la
            marca &rdquo;
          </h2>

          <div>
            <h2 className='text-2xl text-center text-gray-600 mb-4'>
              Nacimos con la visión de ayudar a empresas y profesionales a destacar en internet
              mediante sitios web rápidos, seguros y optimizados. Creemos que cada proyecto es
              único, y por eso ofrecemos soluciones personalizadas desde el desarrollo hasta el
              alojamiento, acompañadas de estrategias de SEO efectivas.
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // se anima una vez al 20% visible
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className=''
        >
          <div>
            <h1 className='text-2xl text-black my-16'>Lo que nos define:</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div>
              <CardAbout
                icon={<Lightbulb size={36} />}
                title='Innovación'
                description='Utilizamos tecnologías modernas para mantenerte siempre a la vanguardia.'
              />
            </div>
            <div>
              <CardAbout
                icon={<Settings size={36} />}
                title='Eficiencia'
                description='Nos enfocamos en rendimiento, seguridad y optimización.'
              />
            </div>
            <div>
              <CardAbout
                icon={<HeartHandshake size={36} />}
                title='Compromiso'
                description='Acompañamos a nuestros clientes en cada etapa del crecimiento digital.'
              />
            </div>
            <div>
              <CardAbout
                icon={<ShieldCheck size={36} />}
                title='Transparencia'
                description='Comunicación clara y resultados medibles.'
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // se anima una vez al 20% visible
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className=''
        >
          <div>
            <h1 className='text-2xl text-black mt-16 text-center'>
              ¿Listo para llevar tu sitio web al siguiente nivel?
            </h1>
            <Button className='text-white bg-black mt-4 mx-auto block'>Contáctanos</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
