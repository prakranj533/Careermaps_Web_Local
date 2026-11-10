import { chromium } from '@playwright/test';
const browser = await chromium.launch({ headless: false });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('https://careermaps-b953d.web.app/', { waitUntil: 'networkidle', timeout: 60000 });
console.log('Waiting for sign-in...');
try {
  for (let i = 0; i < 300; i++) {
    await page.waitForTimeout(1000);
    const url = page.url();
    if (!url.includes('login') && !url.includes('accounts.google')) { console.log('LOGGED IN URL:', url); break; }
    if (i === 299) { console.log('Timed out waiting for login'); await browser.close(); process.exit(1); }
  }
} catch (e) { console.log('ERR', e.message.split('\n')[0]); await browser.close(); process.exit(1); }
await page.waitForLoadState('networkidle').catch(() => {});
await page.waitForTimeout(5000);
await page.screenshot({ path: '/tmp/dash-main.png' });
const text = await page.evaluate(() => document.body.innerText.slice(0, 1500));
console.log('PAGE TEXT:\n' + text);
// discover nav buttons/links
const labels = await page.evaluate(() => [...new Set([...document.querySelectorAll('nav a, aside a, nav button, aside button, [role="tab"], a[href]')].map(e => (e.textContent||'').trim()).filter(t => t && t.length < 40))]);
console.log('NAV:', JSON.stringify(labels));
await browser.close();
console.log('DONE');
