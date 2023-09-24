import "server-only";
import { Locale } from "@/config/i18n-config";

const translations = {
  en: () => import("@/translations/en.json").then((module) => module.default),
  fa: () => import("@/translations/fa.json").then((module) => module.default),
};

export const getTranslations = async (locale: Locale) => translations[locale]();
