import { createChromeStorageStateHookLocal } from 'use-chrome-storage';

// Storage Keys
const STORAGE_KEYS = {
  LANG: 'LANG',
} as const;

export const useLocaleStorage = createChromeStorageStateHookLocal(
  STORAGE_KEYS.LANG
);

