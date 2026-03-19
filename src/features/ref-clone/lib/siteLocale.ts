import { useEffect, useSyncExternalStore } from 'react'
import { getLocale, setLocale } from '#/paraglide/runtime'

export type SiteLocale = 'en' | 'zh'
type LocaleListener = () => void

const listeners = new Set<LocaleListener>()

function normalizeLocale(locale: string): SiteLocale {
  return locale === 'zh' ? 'zh' : 'en'
}

export function getSiteLocale(): SiteLocale {
  return normalizeLocale(getLocale())
}

function subscribe(listener: LocaleListener) {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

function emitLocaleChange() {
  listeners.forEach((listener) => listener())
}

function updateSiteLocale(nextLocale: SiteLocale) {
  const normalizedLocale = normalizeLocale(nextLocale)

  setLocale(normalizedLocale, { reload: false })
  emitLocaleChange()
}

export function useSiteLocale() {
  const locale = useSyncExternalStore(subscribe, getSiteLocale, getSiteLocale)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])

  return {
    locale,
    setLocale: updateSiteLocale,
  }
}
