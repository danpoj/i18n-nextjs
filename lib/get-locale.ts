import { i18n } from '@/config/i18n'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { NextRequest } from 'next/server'

export const getLocale = (request: NextRequest) => {
  const headers: Record<string, string> = {}

  request.headers.forEach((value, key) => {
    headers[key] = value
  })

  // @ts-ignore
  const locales = new Negotiator({ headers: headers }).languages(i18n.locales)

  const locale = match(locales, i18n.locales, i18n.defaultLocale)

  return locale
}
