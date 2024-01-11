'use client';
import {Locale} from '@/infra/translate/i18n';
import {defaultLang} from '@/domain/translate/default-lang';

export const getLanguageUseClient = (locale: Locale) => {
  return defaultLang[locale] ?? defaultLang['pt'];
};
