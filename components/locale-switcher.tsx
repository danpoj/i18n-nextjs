'use client'

import { Locale, i18n } from '@/config/i18n'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LocaleSwitcher() {
  const pathname = usePathname()

  const getPathnameWithLocale = (locale: Locale) => {
    const path = pathname.split('/')
    path[1] = locale

    return path.join('/')
  }

  return (
    <div className='flex gap-2'>
      {i18n.locales.map((locale) => (
        <Link href={getPathnameWithLocale(locale)} key={locale} className='text-white bg-black px-3 py-1 rounded'>
          {locale}
        </Link>
      ))}
    </div>
  )
}
