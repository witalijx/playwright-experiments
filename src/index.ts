import { chromium } from 'playwright';
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://google.com');
    await page.screenshot({path: 'screenshot.png'});
    // other actions...
    await browser.close();
})();