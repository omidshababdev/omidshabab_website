import Background from '@/components/background'
import { ThemeProvider } from '@/components/theme-provider'
import { Locale } from '@/config/i18n-config'
import { getTranslations } from '@/get-translations'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata, ResolvingMetadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import localFont from "next/font/local"
import { notFound } from 'next/navigation'

import { Quicksand } from 'next/font/google'

const englishLatoFont = Quicksand({ subsets: ['latin'] })

// Dynamic Metadata based on locales
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale },
  parent?: ResolvingMetadata
}): Promise<Metadata> {

  const translations = await getTranslations(locale)

  return {
    title: translations.general.omid_shabab,
    description: translations.general.name,
  }
}

// Locale Fonts
export const englishMonaSansFont = localFont({
  src: "../../public/fonts/en/MonaSans/MonaSans[slnt,wdth,wght].woff2",
  variable: "--font-heading",
})

export const englishRecoletaFont = localFont({
  src: [
    {
      path: "../../public/fonts/en/Recoleta/Recoleta-Thin.ttf",
      weight: "100"
    },
    {
      path: "../../public/fonts/en/Recoleta/Recoleta-Light.ttf",
      weight: "300"
    },
    {
      path: "../../public/fonts/en/Recoleta/Recoleta-Regular.ttf",
      weight: "400"
    },
    {
      path: "../../public/fonts/en/Recoleta/Recoleta-Medium.ttf",
      weight: "500"
    },
    {
      path: "../../public/fonts/en/Recoleta/Recoleta-SemiBold.ttf",
      weight: "600"
    },
    {
      path: "../../public/fonts/en/Recoleta/Recoleta-Bold.ttf",
      weight: "700"
    },
    {
      path: "../../public/fonts/en/Recoleta/Recoleta-Black.ttf",
      weight: "900"
    },
  ],
  variable: "--font-heading",
})

export const persianEstedadFont = localFont({
  src: "../../public/fonts/fa/Estedad/Estedad-FD[KSHD,wght].woff2",
  variable: "--font-heading",
})

export function LangFont(locale: string): string {
  switch (locale) {
    case "en":
      return englishLatoFont.className
    case "fa":
      return persianEstedadFont.className
    default:
      return englishLatoFont.className
  }
}

export function LangDir(locale: string): string {
  switch (locale) {
    case "en" || "fr":
      return "ltr"
    case "fa":
      return "rtl"
    default:
      return "ltr"
  }
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const font = LangFont(locale)
  const dir = LangDir(locale)

  let messages;
  try {
    messages = (await import(`../../translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={dir}>
      <body className={cn(
        font,
        "flex justify-center"
      )}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="z-10">
              {children}
            </div>
            <Background />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
