'use client'

import Image from 'next/image';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import logos from '@/data/logoPartenaires';
import { Slide } from 'react-awesome-reveal';
import '../globals.css';

const Partenaires: React.FC = () => {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = logos.length;

  const stopAutoPlay = useCallback(() => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayInterval.current = setInterval(() => {
      if (emblaApi1 && emblaApi2) {
        emblaApi1.scrollNext();
        emblaApi2.scrollPrev();
      }
    }, 2000);
  }, [emblaApi1, emblaApi2, stopAutoPlay]); // stopAutoPlay est maintenant utilisé après sa déclaration

  const onSelect = useCallback(() => {
    if (!emblaApi1 || !emblaApi2) return;
    emblaApi2.scrollTo((totalSlides - 1) - emblaApi1.selectedScrollSnap());
  }, [emblaApi1, emblaApi2, totalSlides]);

  useEffect(() => {
    if (emblaApi1 && emblaApi2) {
      setScrollSnaps(emblaApi1.scrollSnapList());
      emblaApi1.on('select', onSelect);
      emblaApi2.on('select', onSelect);
      startAutoPlay();
      emblaApi1.on('pointerDown', stopAutoPlay);
      emblaApi2.on('pointerDown', stopAutoPlay);
    }
    return () => stopAutoPlay();
  }, [emblaApi1, emblaApi2, startAutoPlay, stopAutoPlay, onSelect]);

  const midPoint = Math.ceil(logos.length / 2);
  const logosFirstHalf = logos.slice(0, midPoint);
  const logosSecondHalf = logos.slice(midPoint);

  return (
    <div className='flex flex-col items-center py-12 bg-yellow-100' id='partenaire'>
      <Slide direction="down">
        <div className="flex items-center justify-center mb-8">
          <div className="w-1/4 h-[2px] bg-yellow-500"></div>
          <h2 className="text-3xl text-center mx-4 font-semibold text-gray-800">
            Nos Partenaires
          </h2>
          <div className="w-1/4 h-[2px] bg-yellow-500"></div>
        </div>
      </Slide>
      <div className='embla w-full max-w-screen-lg'>
        <div className='embla__viewport' ref={emblaRef1}>
          <div className='embla__container'>
            {logosFirstHalf.map((logo, index) => (
              <div key={index} className='embla__slide_min_device flex justify-center items-center sm:min-w-[12%] mr-1 sm:mr-2 xl:min-w-[9%]'>
                <div className='p-4 bg-white rounded-lg shadow-md'>
                  <Image src={logo.src} alt={logo.alt} width={100} height={100} quality={100} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='embla w-full max-w-screen-lg mt-4'>
        <div className='embla__viewport' ref={emblaRef2}>
          <div className='embla__container'>
            {logosSecondHalf.map((logo, index) => (
              <div key={index} className='embla__slide_min_device flex justify-center items-center sm:min-w-[12%] mr-1 sm:mr-2 xl:min-w-[9%]'>
                <div className='p-4 bg-white rounded-lg shadow-md w-full'>
                  <Image src={logo.src} alt={logo.alt} width={100} height={100} quality={100} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-4 space-x-2 lg:block xl:hidden'>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full`}
            onClick={() => {
              if (emblaApi1 && emblaApi2) {
                emblaApi1.scrollTo(index);
                emblaApi2.scrollTo((totalSlides - 1) - index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Partenaires;