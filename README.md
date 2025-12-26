# Modern Counter App

A small, accessible counter web app that persists the count in Local Storage.

## Features

- Simple UI with Increase / Decrease / Reset buttons
- Persisted state using Local Storage (`myCount`)
- Accessibility improvements: `aria-live` updates, clear focus styles, and keyboard shortcuts

## Keyboard Shortcuts

- `ArrowUp` — increase
- `ArrowDown` — decrease
- `R` — reset

## Quick Start

Open `index.html` directly in your browser, or serve the folder with a simple static server.

Using Python 3:

```bash
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Using `serve` (npm):

```bash
npx serve .
```

## Files

- `index.html` — markup and ARIA attributes
- `style.css` — styles and focus indicators
- `script.js` — logic, keyboard handlers, and Local Storage

## Accessibility Notes

- The main counter element uses `role="status"` and `aria-live="polite"` so screen readers hear updates.
- Buttons include `aria-label` and `type="button"` for clarity and proper behavior.
- `.sr-only` helper class is included for screen-reader-only instructions.
- Keyboard support is provided (ArrowUp/ArrowDown/R) and default arrow scrolling is prevented while interacting.

## Contributing

Feel free to open issues or PRs for improvements (tests, CI, or more accessibility checks).

## License

MIT — see LICENSE (not included).
