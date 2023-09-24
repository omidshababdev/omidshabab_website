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

// Dynamic Metadata based on locales
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale },
  parent?: ResolvingMetadata
}): Promise<Metadata> {

  const translations = await getTranslations(locale)

  return {
    title: translations["general"]["omid shabab"],
    description: translations["general"].name,
  }
}

// Locale Fonts
export const englishRecoletaFont = localFont({
  src: "../../public/fonts/en/MonaSans/MonaSans[slnt,wdth,wght].woff2",
  variable: "--font-heading",
})

export const persianEstedadFont = localFont({
  src: "../../public/fonts/fa/Estedad/Estedad-FD[KSHD,wght].woff2",
  variable: "--font-heading",
})

export function LangFont(locale: string): string {
  switch (locale) {
    case "en":
      return englishRecoletaFont.className
    case "fa":
      return persianEstedadFont.className
    default:
      return englishRecoletaFont.className
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
