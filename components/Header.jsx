'use client';
import React, { useState, useEffect } from 'react';

// components
import LightLogo from './LightLogo';
import DarkLogo from './DarkLogo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes'; // import useTheme

const Header = () => {
  const [header, setHeader] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme(); // get the current theme from useTheme

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener('scroll', scrollYPos);
  }, []);

  useEffect(() => {
    if (resolvedTheme) {
      setLoading(false);
    }
  }, [resolvedTheme]);

  if (loading) {
    return null;
  }

  return (
    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'} h-[80px] flex items-center`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {theme === 'light' ? <LightLogo /> : <DarkLogo />}
          <div className='flex items-center gap-x-6'>
            {/* nav */}
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;