'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const DevImg = ({ containerStyles, imgSrc }) => {
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.add('scale-100');
    }
  }, []);

  return (
    <div ref={imgRef} className={`${containerStyles} transform transition-transform duration-500 scale-0`}>
      <Image src={imgSrc} alt='' layout='fill' objectFit='cover' priority />
    </div>
  );
};

export default DevImg;