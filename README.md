# FreeWPMType

Free Bible verse typing tests, set in the King James Version. Check your WPM on Scripture.

## What it is

A static typing test website. Every passage is a KJV verse. One shared typing engine
powers duration pages from 30 seconds to 10 minutes, plus custom text tests with
shareable links.

## Features

- Live WPM and accuracy while you type
- Per character correct and incorrect highlighting, backspace correction
- Blurred results until you click to reveal
- Printable certificate of typing
- Best scores per duration, daily streaks, badges, trickiest key analysis
- Custom tests with shareable URL links
- Dark mode by default, light mode available
- FAQ content with schema markup, sitemap included

## Structure

- `index.html` home page (1 minute test)
- `30-second-typing-test.html` through `10-minute-typing-test.html` duration landing pages
- `custom-typing-test.html` custom text tests
- `assets/freewpmtype.js` the shared typing engine
- `assets/style.css` all styles
- `sitemap.xml` sitemap

## Run locally

Any static server works:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Notes

- No backend, no accounts, no build step. Scores and streaks live in the browser.
- Ad slots are marked in the markup. No ad code is connected yet.
- Canonical URLs currently point at a placeholder domain and need updating before launch.
