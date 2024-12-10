'use client'
import './globals.css';
import Form from 'next/form';
import React from 'react';
import styles from './layout.module.scss';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  return (
      <html lang="es" className={styles.html}>
        <body className={styles.body}>
          <Form action="/items" className={styles.form} role="search">
            <div className={styles.headerContainer}>
              <Link href={"/"} className={styles.logo}>
                <Image
                  src='/meli-logo.png'
                  className={styles.logo}
                  alt="Mercado Libre logo"
                  width={60}
                  height={40}
                />
              </Link>
              <input
                defaultValue={search ?? ''}
                name="search"
                placeholder='Nunca dejes de buscar'
                className={styles.input}
                aria-label="Search items"
              />
              <button type="submit" className={styles.button} aria-label="Search">
                <img
                  src='/lupa.svg'
                  alt="Search icon"
                />
              </button>
            </div>
          </Form>
          {children}
        </body>
      </html>
  );
};

export default Layout;
