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
      <div class="edu-card" style="--i: {i}">
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
                   stroke-linecap="round" stroke-linejoin="round"
                   aria-hidden="true" focusable="false">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              {edu.period}
            </span>
            <span class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round"
                   aria-hidden="true" focusable="false">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {edu.location}
            </span>
          </div>

          {#if edu.note}
            <div class="note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round"
                   aria-hidden="true" focusable="false">
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

  .edu-card {
    animation: enter 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: calc(55ms + var(--i, 0) * 70ms);
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

  .edu-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .edu-card {
    display: flex;
    gap: 16px;
    padding-bottom: 26px;
  }

  .index-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 28px;
  }

  .index-badge {
    width: 30px;
    height: 30px;
    border-radius: var(--radius-sm);
    background: var(--accent-bg);
    color: var(--accent-text);
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 0.5px solid color-mix(in srgb, var(--accent) 18%, transparent);
  }

  .connector {
    flex: 1;
    width: 1px;
    background: var(--border);
    margin-top: 8px;
  }

  .edu-content {
    flex: 1;
    background: var(--bg-secondary);
    border: 0.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 18px;
    box-shadow: var(--shadow-card);
    min-width: 0;
  }

  .degree-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px 10px;
    margin-bottom: 8px;
  }

  .degree {
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
    line-height: 1.35;
    flex: 1;
    min-width: 190px;
  }

  .status-badge {
    flex-shrink: 0;
    font-size: 11px;
    font-weight: 500;
    padding: 5px 8px;
    border-radius: var(--radius-sm);
    white-space: nowrap;
    line-height: 1;
  }

  .in-progress {
    background: var(--accent-bg);
    color: var(--accent-text);
    border: 0.5px solid color-mix(in srgb, var(--accent) 18%, transparent);
  }

  .graduated {
    background: var(--bg-tertiary);
    color: var(--text-muted);
    border: 0.5px solid var(--border);
  }

  .school {
    font-size: 14px;
    color: var(--accent);
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 12px;
  }

  .meta-row {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.35;
    min-width: 0;
  }

  .meta-item svg {
    width: 13px;
    height: 13px;
    stroke: var(--text-muted);
    flex-shrink: 0;
  }

  .note {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin-top: 14px;
    padding: 10px 0 0;
    border-top: 0.5px solid var(--border);
  }

  .note svg {
    width: 13px;
    height: 13px;
    stroke: var(--accent);
    flex-shrink: 0;
    margin-top: 1px;
  }

  .note p {
    font-size: 12.5px;
    color: var(--text-secondary);
    line-height: 1.58;
  }

  @media (max-width: 360px) {
    .page {
      padding-left: 18px;
      padding-right: 18px;
    }

    .edu-card {
      gap: 12px;
    }

    .edu-content {
      padding: 16px;
    }

    .degree {
      min-width: 100%;
    }
  }
</style>
