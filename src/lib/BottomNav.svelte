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
      aria-current={currentPath === tab.href ? 'page' : undefined}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true" focusable="false">
        {@html tab.icon}
      </svg>
      <span>{tab.label}</span>
    </button>
  {/each}
</nav>

<style>
  nav {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 24px);
    max-width: 496px;
    height: 62px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px;
    background: color-mix(in srgb, var(--bg-secondary) 92%, transparent);
    border: 0.5px solid var(--border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-card);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    z-index: 100;
  }

  .nav-item {
    flex: 1;
    min-width: 0;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: none;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    padding: 6px 4px;
    color: var(--text-muted);
    transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
  }

  .nav-item:active {
    transform: scale(0.88);
    transition: transform 0.08s ease;
  }

  .nav-item:hover {
    color: var(--text-secondary);
    background: var(--bg-tertiary);
  }

  .nav-item.active {
    color: var(--accent);
    background: var(--accent-bg);
  }

  .nav-item svg {
    width: 19px;
    height: 19px;
    stroke: currentColor;
    transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .nav-item.active svg {
    transform: scale(1.15);
  }

  .nav-item span {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
