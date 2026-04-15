<!-- src/lib/BottomNav.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  const tabs = [
    {
      href: '/',
      label: 'Summary',
      icon: `<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>`
    },
    {
      href: '/experience',
      label: 'Experience',
      icon: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>`
    },
    {
      href: '/education',
      label: 'Education',
      icon: `<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`
    },
    {
      href: '/skills',
      label: 'Skills',
      icon: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`
    }
  ];

  $: currentPath = $page.url.pathname;
</script>

<nav>
  {#each tabs as tab}
    <button
      class="nav-item"
      class:active={currentPath === tab.href}
      on:click={() => goto(tab.href)}
      aria-label={tab.label}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round">
        {@html tab.icon}
      </svg>
      <span>{tab.label}</span>
    </button>
  {/each}
</nav>

<style>
  nav {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 480px;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    background: var(--bg);
    border-top: 0.5px solid var(--border);
    z-index: 100;
  }

  .nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px 0 12px;
    color: var(--text-muted);
    transition: color 0.15s;
  }

  .nav-item:hover {
    color: var(--text-secondary);
  }

  .nav-item.active {
    color: var(--accent);
  }

  .nav-item svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }

  .nav-item span {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
</style>
