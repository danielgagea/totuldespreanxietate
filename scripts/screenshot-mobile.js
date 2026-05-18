const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const url = process.argv[2];
const label = process.argv[3] || "mobile";

const SCREENSHOT_DIR = path.join(__dirname, "..", "temp_screenshots");
if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

function getNextNumber() {
  const existing = fs
    .readdirSync(SCREENSHOT_DIR)
    .filter((f) => f.startsWith("screenshot-") && f.endsWith(".png"))
    .map((f) => {
      const m = f.match(/^screenshot-(\d+)/);
      return m ? parseInt(m[1], 10) : 0;
    });
  return existing.length > 0 ? Math.max(...existing) + 1 : 1;
}

(async () => {
  const n = getNextNumber();
  const filename = `screenshot-${n}-${label}.png`;
  const filepath = path.join(SCREENSHOT_DIR, filename);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 15000 });
  await page.evaluate(async () => {
    const distance = 400;
    const delay = 80;
    const sh = document.body.scrollHeight;
    let cur = 0;
    while (cur < sh) {
      window.scrollBy(0, distance);
      cur += distance;
      await new Promise((r) => setTimeout(r, delay));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: filepath, fullPage: true });
  console.log(filepath);
  await browser.close();
})();
