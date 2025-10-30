'use client';
import { Hero } from './components/home/Hero';
import { CardServices } from './components/home/CardServices';
import { OurWorking } from './components/home/OurWorking';
import { Button } from '@heroui/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const services: {
    id: number;
    title: string;
    description: string;
    color: 'green' | 'gray' | 'black';
    imageSrc: string;
  }[] = [
    {
      id: 1,
      title: 'Optimización SEO',
      description:
        'Mejora la visibilidad de tu sitio web en los motores de búsqueda con nuestras estrategias avanzadas de SEO.',
      color: 'green',
      imageSrc: '/images/seo.png',
    },
    {
      id: 2,
      title: 'Desarrollo Web Personalizado',
      description:
        'Creamos sitios web a medida que se adaptan a las necesidades específicas de tu negocio.',
      color: 'gray',
      imageSrc: '/images/seo.png',
    },
    {
      id: 3,
      title: 'Hosting optimizado',
      description: 'Servidores rápidos, seguros y con uptime garantizado..',
      color: 'gray',
      imageSrc: '/images/seo.png',
    },
    {
      id: 4,
      title: 'Mantenimiento y soporte',
      description: 'Nos encargamos de que tu sitio esté siempre actualizado y funcionando.',
      color: 'black',
      imageSrc: '/images/soporte.png',
    },
  ];

  return (
    <div className=''>
      <Hero
        title='Impulsa tu presencia online con sitios web rápidos, seguros y optimizados para SEO.'
        subtitle='Desarrollamos y alojamos sitios web a medida para negocios que buscan destacar en
                internet.'
      />

      <div className='container mx-auto px-10'>
        <main className=''>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // se anima una vez al 20% visible
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className=''
          >
            <div className='mt-16'>
              <h1 className={'text-3xl md:text-5xl font-bold mb-4'}>Servicios</h1>
              <h2 className='mb-4 text-gray-600 dark:text-gray-300'>
                Soluciones web completas para tu Negocio
              </h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {services.map((service) => (
                <CardServices
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  color={service.color}
                  imageSrc={service.imageSrc}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // se anima una vez al 20% visible
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className=''
          >
            <div className='mt-16'>
              <h1 className={'text-3xl md:text-5xl font-bold mb-4'}>Nuestro Proceso de Trabajo</h1>
              <h2 className='mb-4 text-gray-600 dark:text-gray-300'>
                Guía paso a paso para alcanzar sus objetivos empresariales
              </h2>
            </div>
            <div className='grid grid-cols-1 gap-6'>
              <OurWorking />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // se anima una vez al 20% visible
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className=''
          >
            <div className='my-16'>
              <div className='bg-[#f3f3f3] rounded-xl'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-10'>
                  <div className='flex items-center'>
                    <div>
                      <h1 className='text-2xl font-bold mb-10'>Hagamos que las cosas sucedan</h1>
                      <p className='text-gray-600 dark:text-gray-300 mb-5'>
                        Contáctanos hoy mismo para saber más sobre cómo nuestros servicios de
                        marketing digital pueden ayudar a tu negocio a crecer y tener éxito en
                        línea.
                      </p>

                      <Button
                        className='text-white bg-black mt-4'
                        onClick={() => {
                          router.push('/contact');
                        }}
                      >
                        Contáctanos
                      </Button>
                    </div>
                  </div>
                  <div className='flex justify-center'>
                    <Image
                      src='/images/make.png'
                      alt='Soporte'
                      width={300}
                      height={300}
                      className='object-cover rounded-xl'
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
