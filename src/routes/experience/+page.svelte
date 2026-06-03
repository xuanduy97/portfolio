<!-- src/routes/experience/+page.svelte -->
<script lang="ts">
  import { jobs, type Job } from '$lib/data';
  let activeJob: Job = jobs[0];

  function handleTabKey(e: KeyboardEvent, index: number) {
    let next = index;
    if (e.key === 'ArrowRight') { e.preventDefault(); next = (index + 1) % jobs.length; }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); next = (index - 1 + jobs.length) % jobs.length; }
    else if (e.key === 'Home') { e.preventDefault(); next = 0; }
    else if (e.key === 'End') { e.preventDefault(); next = jobs.length - 1; }
    else return;
    activeJob = jobs[next];
    (document.querySelector(`#tab-${jobs[next].id}`) as HTMLElement)?.focus();
  }
</script>

<div class="page">
  <header>
    <h1>Work Experience</h1>
    <p class="header-sub">{jobs.length} positions · 4+ years</p>
  </header>

  <!-- Company Tab Bar -->
  <div class="tab-bar" role="tablist" aria-label="Work experience">
    {#each jobs as job, i}
      <button
        role="tab"
        id="tab-{job.id}"
        aria-selected={activeJob.id === job.id}
        aria-controls="experience-panel"
        tabindex={activeJob.id === job.id ? 0 : -1}
        class="tab"
        class:active={activeJob.id === job.id}
        on:click={() => (activeJob = job)}
        on:keydown={e => handleTabKey(e, i)}
      >
        {job.tabLabel}
      </button>
    {/each}
  </div>

  <!-- Job Content -->
  {#key activeJob.id}
    <div class="job-card"
         role="tabpanel"
         id="experience-panel"
         aria-labelledby="tab-{activeJob.id}"
         tabindex="0">
      <!-- Job Header -->
      <div class="job-header">
        <div class="job-title-row">
          <h2 class="job-title">{activeJob.title}</h2>
          <span class="period-badge">{activeJob.period}</span>
        </div>
        <p class="company">{activeJob.company}</p>
        <p class="location-domain">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round"
               aria-hidden="true" focusable="false">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {activeJob.location}
        </p>
        <p class="domain-tag">{activeJob.domain}</p>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

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
               stroke-linecap="round" stroke-linejoin="round"
               aria-hidden="true" focusable="false">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <p>{activeJob.achievement}</p>
        </div>
      {/if}

      <!-- Tech Stack -->
      <div class="section tech-section">
        <h3 class="section-label">Tech Stack</h3>
        <div class="tech-stack">
          {#each activeJob.techStack as tech}
            <span class="tech-pill">{tech}</span>
          {/each}
        </div>
      </div>
    </div>
  {/key}

  <!-- Navigation dots — outside {#key} so the pill transition plays correctly -->
  <div class="dot-nav">
    {#each jobs as job}
      <button
        class="dot"
        class:active={activeJob.id === job.id}
        on:click={() => (activeJob = job)}
        aria-label={job.tabLabel}
      ></button>
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
    margin-bottom: 22px;
    animation: enter 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
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

  .tab-bar {
    animation: enter 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: 55ms;
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding: 0 0 4px;
    margin-bottom: 20px;
    scrollbar-width: none;
  }

  .tab-bar::-webkit-scrollbar {
    display: none;
  }

  .tab {
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    padding: 9px 12px;
    border-radius: var(--radius-sm);
    border: 0.5px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
    white-space: nowrap;
  }

  .tab:hover {
    border-color: var(--border-strong);
    color: var(--text);
  }

  .tab.active {
    background: var(--accent-bg);
    color: var(--accent-text);
    border-color: color-mix(in srgb, var(--accent) 18%, transparent);
  }

  .job-card {
    background: var(--bg-secondary);
    border: 0.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 20px;
    box-shadow: var(--shadow-card);
    animation: fade-in 0.18s ease;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .job-header {
    margin-bottom: 16px;
  }

  .job-title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px 10px;
    margin-bottom: 6px;
  }

  .job-title {
    font-size: 17px;
    font-weight: 600;
    color: var(--text);
    line-height: 1.32;
    flex: 1;
    min-width: 180px;
  }

  .period-badge {
    flex-shrink: 0;
    font-size: 11px;
    padding: 5px 8px;
    border-radius: var(--radius-sm);
    background: var(--bg-tertiary);
    color: var(--text-muted);
    border: 0.5px solid var(--border);
    white-space: nowrap;
  }

  .company {
    font-size: 14px;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 6px;
    line-height: 1.35;
  }

  .location-domain {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 8px;
    line-height: 1.35;
  }

  .location-domain svg {
    width: 12px;
    height: 12px;
    stroke: var(--text-muted);
    flex-shrink: 0;
  }

  .domain-tag {
    font-size: 12px;
    color: var(--text-secondary);
    line-height: 1.45;
  }

  .divider {
    height: 0.5px;
    background: var(--border);
    margin: 18px 0;
  }

  .section {
    margin-bottom: 16px;
  }

  .tech-section {
    margin-top: 18px;
    margin-bottom: 0;
  }

  .section-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 10px;
  }

  .bullet-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .bullet-list li {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.62;
    padding-left: 16px;
    position: relative;
  }

  .bullet-list li::before {
    content: '';
    position: absolute;
    left: 1px;
    top: 0.78em;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
  }

  .achievement {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    border-left: 2px solid var(--accent);
    padding: 9px 0 9px 12px;
    margin-top: 16px;
  }

  .achievement svg {
    width: 14px;
    height: 14px;
    stroke: var(--accent-text);
    flex-shrink: 0;
    margin-top: 1px;
  }

  .achievement p {
    font-size: 12.5px;
    color: var(--accent-text);
    line-height: 1.55;
    font-weight: 500;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .tech-pill {
    font-size: 11.5px;
    padding: 5px 9px;
    border-radius: var(--radius-sm);
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    border: 0.5px solid var(--border);
    line-height: 1;
  }

  .dot-nav {
    display: flex;
    justify-content: center;
    gap: 7px;
    margin-top: 18px;
    animation: enter 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: 110ms;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--border-strong);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: width 0.15s ease, background 0.15s ease;
  }

  .dot.active {
    background: var(--accent);
    width: 18px;
    border-radius: 3px;
  }

  @media (max-width: 360px) {
    .page {
      padding-left: 18px;
      padding-right: 18px;
    }

    .job-card {
      padding: 18px;
    }

    .job-title {
      min-width: 100%;
    }
  }
</style>
