/**
 * Screenshot tool for Totul despre Anxietate
 *
 * Usage:
 *   node scripts/screenshot.js <url>              → screenshot-1.png
 *   node scripts/screenshot.js <url> label         → screenshot-2-label.png
 *
 * Screenshots are saved to temp_screenshots/ with auto-incrementing numbers.
 * Files are never overwritten.
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const url = process.argv[2];
const label = process.argv[3] || null;

if (!url) {
  console.error('Usage: node scripts/screenshot.js <url> [label]');
  console.error('Example: node scripts/screenshot.js http://localhost:3000 hero-fix');
  process.exit(1);
}

const SCREENSHOT_DIR = path.join(__dirname, '..', 'temp_screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

function getNextNumber() {
  const existing = fs.readdirSync(SCREENSHOT_DIR)
    .filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
    .map(f => {
      const match = f.match(/^screenshot-(\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    });

  return existing.length > 0 ? Math.max(...existing) + 1 : 1;
}

async function run() {
  const n = getNextNumber();
  const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
  const filepath = path.join(SCREENSHOT_DIR, filename);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
    // Wait for CSS animations to settle
    await new Promise(r => setTimeout(r, 1200));

    await page.screenshot({ path: filepath, fullPage: true });
    console.log(`${filepath}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  } finally {
    await page.close();
    await browser.close();
  }
}

run().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
