import '@/styles/globals.css';
import { Metadata } from 'next';
import clsx from 'clsx';
import { Providers } from './providers';
import { fontUrbanist } from '@/config/fonts';
import LayouBase from '@/containers/layout/base';

export const metadata: Metadata = {
  title: 'estatein',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          fontUrbanist.variable,
        )}
      >
        <Providers>
          <LayouBase>{children}</LayouBase>
        </Providers>
      </body>
    </html>
  );
}
