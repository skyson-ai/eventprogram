'use client';

import React from 'react';
import testimonials from '@/data/testimonials';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="mx-auto text-center md:max-w-xl lg:max-w-6xl py-12 px-4 bg-gray-400">
      <h3 className="mb-8 text-4xl md:text-3xl font-bold text-gray-800">
        Nos  <strong className='text-yellow-500 font-extrabold'>Témoignages</strong>
      </h3>
      <p className="mb-10 text-lg text-gray-900">
        Découvrez pourquoi elles nous ont rejointes
      </p>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Fade delay={index * 200} key={index}>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6 flex justify-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-40 h-40 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                  width={160}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h5 className="mb-2 text-2xl font-semibold text-gray-800">
                {testimonial.name}
              </h5>
              <h6 className="mb-4 text-lg text-yellow-600 font-medium">
                {testimonial.role}
              </h6>
              <div className="relative max-h-40 overflow-hidden">
                <p className="text-gray-600">
                  “ {testimonial.message} ”
                </p>
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
