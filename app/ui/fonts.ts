

import { Inter } from 'next/font/google'
import { Lusitana } from 'next/font/google'
import { Roboto_Serif } from 'next/font/google'
import { Alegreya } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] });

// export const lusitane = Lusitana({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const robotoSerif = Roboto_Serif({
  weight: ['400'],
  subsets: ['latin'],
})

export const alegreya = Alegreya({
  weight: ['400'],
  subsets: ['latin']
})