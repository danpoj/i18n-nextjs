import LocaleSwitcher from '@/components/locale-switcher'
import type { Locale } from '@/config/i18n'
import { getDictionary } from '@/lib/get-dictionary'

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <div className='h-screen flex flex-col gap-4 items-center justify-center'>
      <LocaleSwitcher />

      <h1>{dictionary.welcome}</h1>

      <div className='flex space-x-4'>
        <button className='border px-4 py-2 bg-black text-white rounded'>{dictionary.counter.increment}</button>
        <button className='border px-4 py-2 bg-black text-white rounded'>{dictionary.counter.decrement}</button>
      </div>
    </div>
  )
}
