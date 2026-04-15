// src/lib/theme.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createTheme() {
  const stored = browser
    ? (localStorage.getItem('theme') as Theme) ?? 'light'
    : 'light';

  const { subscribe, set, update } = writable<Theme>(stored);

  return {
    subscribe,
    toggle: () =>
      update((t) => {
        const next: Theme = t === 'light' ? 'dark' : 'light';
        if (browser) {
          localStorage.setItem('theme', next);
          document.documentElement.setAttribute('data-theme', next);
        }
        return next;
      }),
    init: () => {
      if (browser) {
        const t = (localStorage.getItem('theme') as Theme) ?? 'light';
        document.documentElement.setAttribute('data-theme', t);
        set(t);
      }
    }
  };
}

export const theme = createTheme();
