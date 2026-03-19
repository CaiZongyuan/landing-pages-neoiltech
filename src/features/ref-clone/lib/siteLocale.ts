import { useEffect, useState } from 'react'
import { getLocale, setLocale } from '#/paraglide/runtime'

export type SiteLocale = 'en' | 'zh'

function normalizeLocale(locale: string): SiteLocale {
  return locale === 'zh' ? 'zh' : 'en'
}

export function getSiteLocale(): SiteLocale {
  return normalizeLocale(getLocale())
}

export function useSiteLocale() {
  const [locale, setLocaleState] = useState<SiteLocale>(() => getSiteLocale())

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  function updateLocale(nextLocale: SiteLocale) {
    setLocale(nextLocale, { reload: false })
    setLocaleState(nextLocale)
  }

  return {
    locale,
    setLocale: updateLocale,
  }
}
