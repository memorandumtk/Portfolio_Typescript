'use client'

import { ThemeProvider } from 'next-themes'
  // return <ThemeProvider attribute='class'>{children}</ThemeProvider>
// }
export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute='class' >
            {children}
        </ThemeProvider>
        )
}