import '../styles/globals.css';
import { Inter } from 'next/font/google';
import styles from './index.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BRNDD BLOG',
  description: "Hear more about the BRNDD community and what we're working on.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <header className={styles.logos}>
        <p className='font-logo'>BRNDD BLOG</p>
      </header>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
