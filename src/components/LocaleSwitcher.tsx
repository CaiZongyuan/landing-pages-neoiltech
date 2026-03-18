// Locale switcher refs:
// - Paraglide docs: https://inlang.com/m/gerre34r/library-inlang-paraglideJs
// - Router example: https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#switching-locale
import { getLocale, locales, setLocale } from '#/paraglide/runtime'
import { m } from '#/paraglide/messages'

export default function ParaglideLocaleSwitcher() {
  const currentLocale = getLocale()

  return (
    <div className="locale-toggle" aria-label={m.language_label()}>
      <span className="hidden text-xs font-semibold tracking-[0.14em] text-[var(--sea-ink-soft)] uppercase lg:block">
        {m.current_locale({ locale: currentLocale })}
      </span>
      <div className="flex gap-1">
        {locales.map((locale) => (
          <button
            key={locale}
            type="button"
            onClick={() => setLocale(locale)}
            aria-pressed={locale === currentLocale}
            className={`locale-chip ${locale === currentLocale ? 'locale-chip--active' : ''}`}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
