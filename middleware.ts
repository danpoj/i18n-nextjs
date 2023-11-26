import { NextRequest, NextResponse } from 'next/server'
import { i18n } from './config/i18n'
import { getLocale } from './lib/get-locale'

export const middleware = (request: NextRequest) => {
  const locale = getLocale(request)
  const { pathname } = request.nextUrl

  const isLocalePathname = i18n.locales.some((loc) => pathname.startsWith(`/${loc}`))

  if (isLocalePathname) return NextResponse.next()

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = { matcher: ['/((?!.*/.|api).*)'] }
