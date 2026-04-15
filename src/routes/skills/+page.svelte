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
    {#each skills as group}
      <div class="group-card">
        <div class="group-header">
          <div class="group-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
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
  .page {
    padding: 20px 20px 24px;
  }

  header {
    margin-bottom: 24px;
  }

  h1 {
    font-size: 22px;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.01em;
  }

  .header-sub {
    font-size: 12px;
    color: var(--text-muted);
    margin-top: 4px;
  }

  .skill-groups {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .group-card {
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
    padding: 14px 16px;
    border: 0.5px solid var(--border);
  }

  .group-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .group-icon {
    width: 32px;
    height: 32px;
    border-radius: var(--radius-sm);
    background: var(--accent-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .group-icon svg {
    width: 16px;
    height: 16px;
    stroke: var(--accent-text);
  }

  .group-label {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .pill {
    font-size: 12px;
    padding: 4px 12px;
    border-radius: 20px;
    background: var(--bg);
    color: var(--text-secondary);
    border: 0.5px solid var(--border);
    transition: border-color 0.15s;
  }

  .pill:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
</style>
