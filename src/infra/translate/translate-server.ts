import {Locale} from './i18n';
import {defaultLang} from '@/domain/translate/default-lang';

export const getLanguageServer = (locale: Locale) => {
  return defaultLang[locale] ?? defaultLang['pt'];
};
