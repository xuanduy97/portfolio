<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { fly, fade } from 'svelte/transition';
  import { theme } from '$lib/theme';
  import BottomNav from '$lib/BottomNav.svelte';

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  onMount(() => theme.init());
</script>

<svelte:head>
  <title>Mai Xuân Duy — Portfolio</title>
</svelte:head>

<div class="app" data-theme={$theme}>
  <main>
    {#key $page.url.pathname}
      <div class="page-wrap"
           in:fly={prefersReducedMotion ? { y: 0, duration: 1 } : { y: 8, duration: 210, delay: 40 }}
           out:fade={{ duration: prefersReducedMotion ? 1 : 40 }}>
        <slot />
      </div>
    {/key}
  </main>
  <BottomNav />
</div>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(:root) {
    --bg: #f6f7f9;
    --bg-secondary: #ffffff;
    --bg-tertiary: #eef1f5;
    --text: #15171a;
    --text-secondary: #4e5562;
    --text-muted: #818a98;
    --border: rgba(21, 23, 26, 0.1);
    --border-strong: rgba(21, 23, 26, 0.18);
    --accent: #2563eb;
    --accent-bg: #edf4ff;
    --accent-text: #1d4ed8;
    --shadow-card: 0 1px 2px rgba(21, 23, 26, 0.04), 0 14px 34px rgba(21, 23, 26, 0.06);
    --nav-height: 82px;
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 8px;
  }

  :global([data-theme='dark']) {
    --bg: #0f1115;
    --bg-secondary: #171b22;
    --bg-tertiary: #222832;
    --text: #f4f6fb;
    --text-secondary: #c2c8d2;
    --text-muted: #7d8796;
    --border: rgba(244, 246, 251, 0.1);
    --border-strong: rgba(244, 246, 251, 0.18);
    --accent: #7aa7ff;
    --accent-bg: rgba(122, 167, 255, 0.16);
    --accent-text: #a8c7ff;
    --shadow-card: 0 1px 2px rgba(0, 0, 0, 0.16), 0 18px 42px rgba(0, 0, 0, 0.22);
  }

  :global(html) {
    background: var(--bg);
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    height: 100vh;
    overflow: hidden;
    font-size: 14px;
    letter-spacing: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  :global(button),
  :global(a) {
    -webkit-tap-highlight-color: transparent;
  }

  :global(:focus-visible) {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: var(--bg);
    color: var(--text);
    max-width: 520px;
    margin: 0 auto;
    border-left: 0.5px solid var(--border);
    border-right: 0.5px solid var(--border);
  }

  main {
    flex: 1;
    overflow-y: auto;
    padding-bottom: var(--nav-height);
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--border-strong) transparent;
  }

  .page-wrap {
    min-height: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(*) {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }

  @media (max-width: 520px) {
    .app {
      border-left: 0;
      border-right: 0;
    }
  }
</style>
