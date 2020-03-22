const Puppeteer = require('puppeteer');

(async () => {
  const browser = await Puppeteer.launch({
    args: ['--no-sandbox'],
    defaultViewport: {
      width: 1519,
      height: 824,
    },
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('https:/bing.com');
  const context = await page.content();
  console.log(context);
})();