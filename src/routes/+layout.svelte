<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/theme';
  import BottomNav from '$lib/BottomNav.svelte';

  onMount(() => theme.init());
</script>

<svelte:head>
  <title>Mai Xuân Duy — Portfolio</title>
</svelte:head>

<div class="app" data-theme={$theme}>
  <main>
    <slot />
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
    --bg: #ffffff;
    --bg-secondary: #f5f5f5;
    --bg-tertiary: #eeeeee;
    --text: #1a1a1a;
    --text-secondary: #555555;
    --text-muted: #999999;
    --border: rgba(0,0,0,0.1);
    --border-strong: rgba(0,0,0,0.2);
    --accent: #1F4E79;
    --accent-bg: #e6f1fb;
    --accent-text: #0c447c;
    --nav-height: 64px;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
  }

  :global([data-theme='dark']) {
    --bg: #141414;
    --bg-secondary: #1e1e1e;
    --bg-tertiary: #252525;
    --text: #e8e8e8;
    --text-secondary: #aaaaaa;
    --text-muted: #666666;
    --border: rgba(255,255,255,0.08);
    --border-strong: rgba(255,255,255,0.15);
    --accent: #4fa3e3;
    --accent-bg: #0c2a40;
    --accent-text: #7ec8f5;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    height: 100vh;
    overflow: hidden;
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: var(--bg);
    color: var(--text);
    max-width: 480px;
    margin: 0 auto;
  }

  main {
    flex: 1;
    overflow-y: auto;
    padding-bottom: var(--nav-height);
    scroll-behavior: smooth;
  }
</style>
