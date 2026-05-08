import en from './en.json';
import fr from './fr.json';

export const locales = ['en', 'fr'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

const ui = { en, fr } as const satisfies Record<Lang, Record<string, string>>;

export type TranslationKey = keyof typeof en;

export function t(key: TranslationKey, lang: Lang = defaultLang): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const segment = url.pathname.split('/').filter(Boolean)[0];
  return segment === 'fr' ? 'fr' : 'en';
}

export function pathWithoutLang(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'fr') segments.shift();
  return '/' + segments.join('/');
}

export function localizedPath(pathname: string, lang: Lang): string {
  const stripped = pathWithoutLang(pathname).replace(/^\/+|\/+$/g, '');
  if (lang === defaultLang) return stripped ? `/${stripped}` : '/';
  return stripped ? `/${lang}/${stripped}` : `/${lang}/`;
}
