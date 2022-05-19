const puppeteer = require('puppeteer');
async function run () {
    const browser = await puppeteer.launch({
        executablePath: 'google-chrome',
        headless: true,
        args: [
            '--no-sandbox',
            // '--incognito',
            '--start-fullscreen',
            '--window-size=1920,1080'
        ]
    });
    await tab(browser, 'https://github.com/amitkshirsagar13', 'github');
    await tab(browser, 'http://localhost:4040', 'msc');
    browser.close();
}

const tab = async (browser, url, name) => {
    console.log(new Date());
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url);
    await page.screenshot({ path: `${name}.png` });
    console.log(`Loaded ${name}!!!`);
    console.log(new Date());
}
run();