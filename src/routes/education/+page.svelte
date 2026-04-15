<!-- src/routes/education/+page.svelte -->
<script lang="ts">
  import { education } from '$lib/data';
</script>

<div class="page">
  <header>
    <h1>Education</h1>
    <p class="header-sub">{education.length} degrees</p>
  </header>

  <div class="edu-list">
    {#each education as edu, i}
      <div class="edu-card">
        <!-- Index badge -->
        <div class="index-col">
          <div class="index-badge">{i + 1}</div>
          {#if i < education.length - 1}
            <div class="connector" />
          {/if}
        </div>

        <div class="edu-content">
          <div class="degree-row">
            <h2 class="degree">{edu.degree}</h2>
            {#if edu.inProgress}
              <span class="status-badge in-progress">In Progress</span>
            {:else}
              <span class="status-badge graduated">Graduated</span>
            {/if}
          </div>

          <p class="school">{edu.school}</p>

          <div class="meta-row">
            <span class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              {edu.period}
            </span>
            <span class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {edu.location}
            </span>
          </div>

          {#if edu.note}
            <div class="note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <p>{edu.note}</p>
            </div>
          {/if}
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

  .edu-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .edu-card {
    display: flex;
    gap: 14px;
    padding-bottom: 24px;
  }

  .index-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 28px;
  }

  .index-badge {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--accent-bg);
    color: var(--accent-text);
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .connector {
    flex: 1;
    width: 1px;
    background: var(--border);
    margin-top: 6px;
  }

  .edu-content {
    flex: 1;
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
    padding: 16px;
  }

  .degree-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 6px;
  }

  .degree {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    line-height: 1.35;
    flex: 1;
  }

  .status-badge {
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 500;
    padding: 3px 8px;
    border-radius: 20px;
    white-space: nowrap;
  }

  .in-progress {
    background: var(--accent-bg);
    color: var(--accent-text);
  }

  .graduated {
    background: var(--bg-tertiary);
    color: var(--text-muted);
  }

  .school {
    font-size: 13px;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 10px;
  }

  .meta-row {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }

  .meta-item svg {
    width: 13px;
    height: 13px;
    stroke: var(--text-muted);
    flex-shrink: 0;
  }

  .note {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    margin-top: 12px;
    padding: 10px 12px;
    background: var(--bg);
    border-radius: var(--radius-sm);
    border: 0.5px solid var(--border);
  }

  .note svg {
    width: 13px;
    height: 13px;
    stroke: var(--accent);
    flex-shrink: 0;
    margin-top: 1px;
  }

  .note p {
    font-size: 12px;
    color: var(--text-secondary);
    line-height: 1.55;
  }
</style>
