# Portfolio — Mai Xuân Duy

Tauri 2 + SvelteKit + TypeScript desktop portfolio app.

## Prerequisites

Install these before running:

1. **Rust** (stable toolchain)
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. **Node.js** 18+ and npm

3. **Tauri system dependencies** (Linux only):
   ```bash
   # Ubuntu / Debian
   sudo apt update && sudo apt install -y \
     libwebkit2gtk-4.1-dev build-essential curl wget file \
     libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev
   ```
   macOS and Windows: no extra steps needed.

4. **Tauri CLI** (via npm, already in devDependencies):
   ```bash
   npm install
   ```

## Development

```bash
npm run tauri dev
```
Opens the app with hot-reload. DevTools open automatically in debug mode.

## Build

```bash
npm run tauri build
```
Output binary is in `src-tauri/target/release/bundle/`.

## Project Structure

```
portfolio/
├── src/
│   ├── app.html              # HTML shell
│   ├── lib/
│   │   ├── data.ts           # ← Edit this to update portfolio content
│   │   ├── theme.ts          # Dark/light mode store
│   │   └── BottomNav.svelte  # Bottom navigation bar
│   └── routes/
│       ├── +layout.svelte    # Root layout + global CSS variables
│       ├── +page.svelte      # Summary tab
│       ├── experience/
│       │   └── +page.svelte  # Work Experience + company tabs
│       ├── education/
│       │   └── +page.svelte  # Education timeline
│       └── skills/
│           └── +page.svelte  # Skills grouped by category
├── src-tauri/
│   ├── src/
│   │   ├── main.rs           # Entry point
│   │   └── lib.rs            # Tauri setup
│   ├── tauri.conf.json       # Window config, app name, bundle
│   └── Cargo.toml            # Rust dependencies
├── package.json
├── svelte.config.js
└── vite.config.ts
```

## Customization

All content lives in `src/lib/data.ts`:
- `profile` — name, title, summary, contact info
- `jobs` — work experience entries (add/remove companies here)
- `education` — education entries
- `skills` — skill groups and items

To add a new company tab in Experience: add a new entry to the `jobs` array in `data.ts` — the tab appears automatically.

## App window size

Edit `src-tauri/tauri.conf.json`:
```json
"width": 420,
"height": 780
```
