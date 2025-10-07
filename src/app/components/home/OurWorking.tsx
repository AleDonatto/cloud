'use client';
import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@heroui/react';

export const OurWorking = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const working = [
    {
      id: 1,
      title: '01 Consulta',
      description:
        'Durante la consulta inicial, analizaremos sus objetivos comerciales, su público objetivo y sus estrategias de marketing actuales. Esto nos permitirá comprender sus necesidades y adaptar nuestros servicios a sus necesidades.',
    },
    {
      id: 2,
      title: '02 Investigacion y Estrategia de Desarrollo',
      description:
        'En esta fase, realizaremos una investigación exhaustiva de su mercado y competencia. Desarrollaremos una estrategia personalizada que se alinee con sus objetivos comerciales y maximice su potencial de crecimiento.',
    },
    {
      id: 3,
      title: '03 Implementacion',
      description:
        'Durante la fase de implementación, llevaremos a cabo el plan acordado, utilizando las mejores prácticas y tecnologías para garantizar resultados óptimos.',
    },
    {
      id: 4,
      title: '04 Monitoreo y Optimización',
      description:
        'En esta fase, supervisaremos el rendimiento de la solución implementada, realizando ajustes y optimizaciones según sea necesario para garantizar que se cumplan los objetivos comerciales.',
    },
    {
      id: 5,
      title: '05 Soporte y Mejora',
      description:
        'En esta fase, proporcionaremos soporte continuo y mejoras a la solución implementada, asegurando que siga siendo efectiva y relevante para su negocio.',
    },
  ];
  return (
    <div>
      <Accordion variant='splitted'>
        {working.map((work) => (
          <AccordionItem
            key={work.id}
            aria-label={`Accordion ${work.id}`}
            title={<p className='text-2xl font-bold'>{work.title}</p>}
            className={`${selectedCard === work.id ? 'bg-[#B9FF66]' : ''}`}
            onClick={() => setSelectedCard(work.id)}
          >
            <p className='text-gray-600 dark:text-gray-300'>{work.description}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
