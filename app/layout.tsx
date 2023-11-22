import type { Metadata } from 'next';
import {
  monumentExtended,
  satoshiBold,
  satoshiMedium,
  satoshiRegular,
} from '@/fonts/fonts';
import './globals.css';
import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Niftables test',
  description: 'Niftatbles test home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${monumentExtended.variable} ${satoshiRegular.variable} ${satoshiMedium.variable} ${satoshiBold.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        {' '}
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
