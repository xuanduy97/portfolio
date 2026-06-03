<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { profile } from '$lib/data';
  import { theme } from '$lib/theme';
</script>

<div class="page">
  <!-- Header -->
  <header>
    <div class="header-top">
      <div class="avatar">MXD</div>
      <button class="theme-btn" on:click={() => theme.toggle()} aria-label="Toggle theme">
        {#if $theme === 'light'}
          <!-- Moon icon -->
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round"
               aria-hidden="true" focusable="false">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {:else}
          <!-- Sun icon -->
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round"
               aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        {/if}
      </button>
    </div>
    <h1>{profile.name}</h1>
    <p class="title">{profile.title}</p>
    <span class="subtitle-tag">{profile.subtitle}</span>
  </header>

  <!-- Summary -->
  <section class="section">
    <h2 class="section-label">About</h2>
    {#each profile.summary.split('\n\n') as paragraph}
      <p class="body-text">{paragraph}</p>
    {/each}
  </section>

  <!-- Highlights -->
  <section class="section">
    <h2 class="section-label">Technologies</h2>
    <div class="pills">
      {#each profile.highlights as tag}
        <span class="pill">{tag}</span>
      {/each}
    </div>
  </section>

  <!-- Contact -->
  <section class="section">
    <h2 class="section-label">Contact</h2>
    <div class="contact-list">
      <a class="contact-item" href="mailto:{profile.email}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true" focusable="false">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        <span>{profile.email}</span>
      </a>
      <a class="contact-item" href="tel:{profile.phone}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true" focusable="false">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
        </svg>
        <span>{profile.phone}</span>
      </a>
      <a class="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true" focusable="false">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
        <span>linkedin.com/in/xuanduy97</span>
      </a>
      <div class="contact-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true" focusable="false">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>{profile.location}</span>
      </div>
    </div>
  </section>
</div>

<style>
  @keyframes enter {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .page {
    padding: 28px 24px 32px;
  }

  .page > * {
    animation: enter 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .page > *:nth-child(2) { animation-delay: 55ms; }
  .page > *:nth-child(3) { animation-delay: 110ms; }
  .page > *:nth-child(4) { animation-delay: 165ms; }

  header {
    margin-bottom: 30px;
    padding-bottom: 26px;
    border-bottom: 0.5px solid var(--border);
  }

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }

  .avatar {
    width: 56px;
    height: 56px;
    border-radius: var(--radius-lg);
    background: var(--accent-bg);
    color: var(--accent-text);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0;
    border: 0.5px solid color-mix(in srgb, var(--accent) 18%, transparent);
  }

  .theme-btn {
    width: 38px;
    height: 38px;
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    border: 0.5px solid var(--border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    box-shadow: 0 1px 2px rgba(21, 23, 26, 0.04);
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }

  .theme-btn:hover {
    background: var(--bg-tertiary);
    color: var(--text);
    border-color: var(--border-strong);
  }

  .theme-btn svg {
    width: 18px;
    height: 18px;
  }

  h1 {
    font-size: 30px;
    font-weight: 600;
    color: var(--text);
    letter-spacing: 0;
    line-height: 1.12;
    margin-bottom: 6px;
  }

  .title {
    font-size: 15px;
    color: var(--text-secondary);
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .subtitle-tag {
    display: inline-block;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: var(--radius-sm);
    background: var(--accent-bg);
    color: var(--accent-text);
    font-weight: 500;
    border: 0.5px solid color-mix(in srgb, var(--accent) 16%, transparent);
  }

  .section {
    margin-bottom: 30px;
  }

  .section-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 12px;
  }

  .body-text {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 12px;
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pill {
    font-size: 12px;
    padding: 6px 10px;
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border: 0.5px solid var(--border);
    line-height: 1;
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    color: var(--text-secondary);
    text-decoration: none;
    background: var(--bg-secondary);
    border: 0.5px solid var(--border);
    border-radius: var(--radius-md);
    padding: 12px;
    min-width: 0;
    transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
  }

  .contact-item:hover {
    color: var(--accent);
    border-color: color-mix(in srgb, var(--accent) 35%, var(--border));
    background: color-mix(in srgb, var(--accent-bg) 45%, var(--bg-secondary));
  }

  .contact-item svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    stroke: var(--text-muted);
  }

  .contact-item span {
    min-width: 0;
    overflow-wrap: anywhere;
    line-height: 1.35;
  }

  @media (max-width: 360px) {
    .page {
      padding-left: 18px;
      padding-right: 18px;
    }

    h1 {
      font-size: 27px;
    }
  }
</style>
