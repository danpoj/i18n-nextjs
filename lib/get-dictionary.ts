import { Locale } from '@/config/i18n'

const dictionaries = {
  en: () => import('@/dictionary/en.json').then((module) => module.default),
  de: () => import('@/dictionary/de.json').then((module) => module.default),
  cs: () => import('@/dictionary/cs.json').then((module) => module.default),
  ko: () => import('@/dictionary/ko.json').then((module) => module.default),
}

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en()
}
