import { ThemeProvider } from '@/components/theme-provider'
import { Locale } from '@/config/i18n-config'
import { getTranslations } from '@/get-translations'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata, ResolvingMetadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import localFont from "next/font/local"
import { notFound } from 'next/navigation'
import { Inter } from "next/font/google";

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
const englishInterFont = Inter({ subsets: ["latin"] });

const englishMonaSansFont = localFont({
  src: "../../public/fonts/en/MonaSans/MonaSans[slnt,wdth,wght].woff2",
  variable: "--font-heading",
})

const englishSatoshiFont = localFont({
  src: "../../public/fonts/en/Satoshi/Satoshi-Variable.ttf",
  variable: "--font-heading",
  display: 'fallback',
  style: "absolute"
})

const englishPlusJakartaSansFont = localFont({
  src: [
    {
      path: "../../public/fonts/en/PlusJakartaSans/PlusJakartaSans-Light.ttf",
      weight: "300"
    },
    {
      path: "../../public/fonts/en/PlusJakartaSans/PlusJakartaSans-Regular.ttf",
      weight: "400"
    },
    {
      path: "../../public/fonts/en/PlusJakartaSans/PlusJakartaSans-Medium.ttf",
      weight: "500"
    },
    {
      path: "../../public/fonts/en/PlusJakartaSans/PlusJakartaSans-SemiBold.ttf",
      weight: "600"
    },
    {
      path: "../../public/fonts/en/PlusJakartaSans/PlusJakartaSans-Bold.ttf",
      weight: "700"
    },
    {
      path: "../../public/fonts/en/PlusJakartaSans/PlusJakartaSans-SemiBold.ttf",
      weight: "800"
    },
  ],
  variable: "--font-heading",
})

const englishRecoletaFont = localFont({
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

const persianEstedadFont = localFont({
  src: "../../public/fonts/fa/Estedad/Estedad-FD[KSHD,wght].woff2",
  variable: "--font-heading",
})

const persianRokhFont = localFont({
  src: [
    {
      path: "../../public/fonts/fa/Rokh/RokhFaNum-Light.ttf",
      weight: "300"
    },
    {
      path: "../../public/fonts/fa/Rokh/RokhFaNum-Medium.ttf",
      weight: "500"
    },
    {
      path: "../../public/fonts/fa/Rokh/RokhFaNum-Bold.ttf",
      weight: "700"
    },
  ],
  variable: "--font-heading",
})

function LangFont(locale: string): string {
  switch (locale) {
    case "en":
      return persianRokhFont.className
    case "fa":
      return persianRokhFont.className
    default:
      return persianRokhFont.className
  }
}

function LangDir(locale: string): string {
  switch (locale) {
    case "en":
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

  const timeZone = 'Europe/Vienna';

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
        "flex justify-center min-h-screen bg-opacity-5 relative"
      )}>
        <NextIntlClientProvider timeZone={timeZone} locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-full z-10">
              {children}
            </div>
            <div className="absolute background w-full min-h-full z-0 bg-white opacity-5 dark:opacity-10" />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
