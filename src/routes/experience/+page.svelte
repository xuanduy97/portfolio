<!-- src/routes/experience/+page.svelte -->
<script lang="ts">
  import { jobs, type Job } from '$lib/data';
  let activeJob: Job = jobs[0];
</script>

<div class="page">
  <header>
    <h1>Work Experience</h1>
    <p class="header-sub">{jobs.length} positions · 4+ years</p>
  </header>

  <!-- Company Tab Bar -->
  <div class="tab-bar" role="tablist">
    {#each jobs as job}
      <button
        role="tab"
        aria-selected={activeJob.id === job.id}
        class="tab"
        class:active={activeJob.id === job.id}
        on:click={() => (activeJob = job)}
      >
        {job.tabLabel}
      </button>
    {/each}
  </div>

  <!-- Job Content -->
  {#key activeJob.id}
    <div class="job-card" role="tabpanel">
      <!-- Job Header -->
      <div class="job-header">
        <div class="job-title-row">
          <h2 class="job-title">{activeJob.title}</h2>
          <span class="period-badge">{activeJob.period}</span>
        </div>
        <p class="company">{activeJob.company}</p>
        <p class="location-domain">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {activeJob.location}
        </p>
        <p class="domain-tag">{activeJob.domain}</p>
      </div>

      <!-- Divider -->
      <div class="divider" />

      <!-- Responsibilities -->
      <div class="section">
        <h3 class="section-label">Responsibilities</h3>
        <ul class="bullet-list">
          {#each activeJob.bullets as bullet}
            <li>{bullet}</li>
          {/each}
        </ul>
      </div>

      <!-- Achievement (if any) -->
      {#if activeJob.achievement}
        <div class="achievement">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <p>{activeJob.achievement}</p>
        </div>
      {/if}

      <!-- Tech Stack -->
      <div class="section" style="margin-top: 16px;">
        <h3 class="section-label">Tech Stack</h3>
        <div class="tech-stack">
          {#each activeJob.techStack as tech}
            <span class="tech-pill">{tech}</span>
          {/each}
        </div>
      </div>
    </div>

    <!-- Navigation dots -->
    <div class="dot-nav">
      {#each jobs as job, i}
        <button
          class="dot"
          class:active={activeJob.id === job.id}
          on:click={() => (activeJob = job)}
          aria-label={job.tabLabel}
        />
      {/each}
    </div>
  {/key}
</div>

<style>
  .page {
    padding: 20px 20px 24px;
  }

  header {
    margin-bottom: 20px;
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

  .tab-bar {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding-bottom: 2px;
    margin-bottom: 18px;
    scrollbar-width: none;
  }

  .tab-bar::-webkit-scrollbar {
    display: none;
  }

  .tab {
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 500;
    padding: 6px 16px;
    border-radius: 20px;
    border: 0.5px solid var(--border);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.15s;
  }

  .tab.active {
    background: var(--accent-bg);
    color: var(--accent-text);
    border-color: transparent;
  }

  .job-card {
    background: var(--bg-secondary);
    border-radius: var(--radius-lg);
    padding: 18px;
    animation: fade-in 0.18s ease;
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .job-header {
    margin-bottom: 14px;
  }

  .job-title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 4px;
  }

  .job-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    line-height: 1.3;
    flex: 1;
  }

  .period-badge {
    flex-shrink: 0;
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 20px;
    background: var(--bg-tertiary);
    color: var(--text-muted);
    border: 0.5px solid var(--border);
    white-space: nowrap;
  }

  .company {
    font-size: 13px;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 4px;
  }

  .location-domain {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }

  .location-domain svg {
    width: 12px;
    height: 12px;
    stroke: var(--text-muted);
    flex-shrink: 0;
  }

  .domain-tag {
    font-size: 11px;
    color: var(--text-muted);
    font-style: italic;
  }

  .divider {
    height: 0.5px;
    background: var(--border);
    margin: 14px 0;
  }

  .section {
    margin-bottom: 14px;
  }

  .section-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 8px;
  }

  .bullet-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .bullet-list li {
    font-size: 12.5px;
    color: var(--text-secondary);
    line-height: 1.55;
    padding-left: 14px;
    position: relative;
  }

  .bullet-list li::before {
    content: '–';
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  .achievement {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    background: var(--accent-bg);
    border-radius: var(--radius-sm);
    padding: 10px 12px;
    margin-top: 12px;
  }

  .achievement svg {
    width: 14px;
    height: 14px;
    stroke: var(--accent-text);
    flex-shrink: 0;
    margin-top: 1px;
  }

  .achievement p {
    font-size: 12px;
    color: var(--accent-text);
    line-height: 1.5;
    font-weight: 500;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .tech-pill {
    font-size: 11px;
    padding: 3px 10px;
    border-radius: var(--radius-sm);
    background: var(--bg);
    color: var(--text-secondary);
    border: 0.5px solid var(--border);
  }

  .dot-nav {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 16px;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--border-strong);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.15s;
  }

  .dot.active {
    background: var(--accent);
    width: 18px;
    border-radius: 3px;
  }
</style>
