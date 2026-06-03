<!-- src/routes/skills/+page.svelte -->
<script lang="ts">
  import { skills } from '$lib/data';

  // icon paths per skill group label
  const icons: Record<string, string> = {
    'Languages': `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
    'Mobile': `<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>`,
    'Embedded & IoT': `<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>`,
    'Backend / DB': `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>`,
    'Tools & DevOps': `<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>`,
    'Currently Learning': `<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`,
    'English': `<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1"/>`,
  };

  const defaultIcon = `<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>`;
</script>

<div class="page">
  <header>
    <h1>Skills</h1>
    <p class="header-sub">{skills.length} categories</p>
  </header>

  <div class="skill-groups">
    {#each skills as group, i}
      <div class="group-card" style="--i: {i}">
        <div class="group-header">
          <div class="group-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                 aria-hidden="true" focusable="false">
              {@html icons[group.label] ?? defaultIcon}
            </svg>
          </div>
          <h2 class="group-label">{group.label}</h2>
        </div>

        <div class="pills">
          {#each group.items as item}
            <span class="pill">{item}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes enter {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .page {
    padding: 28px 24px 32px;
  }

  header {
    margin-bottom: 26px;
    animation: enter 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .group-card {
    animation: enter 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: calc(55ms + var(--i, 0) * 50ms);
  }

  h1 {
    font-size: 25px;
    font-weight: 600;
    color: var(--text);
    letter-spacing: 0;
    line-height: 1.15;
  }

  .header-sub {
    font-size: 13px;
    color: var(--text-muted);
    margin-top: 6px;
  }

  .skill-groups {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .group-card {
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
    padding: 18px;
    border: 0.5px solid var(--border);
    box-shadow: 0 1px 2px rgba(21, 23, 26, 0.04);
  }

  .group-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  .group-icon {
    width: 34px;
    height: 34px;
    border-radius: var(--radius-sm);
    background: var(--accent-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 0.5px solid color-mix(in srgb, var(--accent) 18%, transparent);
  }

  .group-icon svg {
    width: 16px;
    height: 16px;
    stroke: var(--accent-text);
  }

  .group-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    line-height: 1.3;
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .pill {
    font-size: 12px;
    padding: 6px 9px;
    border-radius: var(--radius-sm);
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    border: 0.5px solid var(--border);
    line-height: 1.2;
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  }

  .pill:hover {
    background: var(--accent-bg);
    border-color: color-mix(in srgb, var(--accent) 30%, var(--border));
    color: var(--accent);
  }

  @media (max-width: 360px) {
    .page {
      padding-left: 18px;
      padding-right: 18px;
    }

    .group-card {
      padding: 16px;
    }
  }
</style>
