const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/reel/CXBlhblDF_f/');
    await page.evaluate(()=> {
        const media = document.querySelector("video");
        const author = document.querySelector("a");
        
        console.log(media)
        console.log(author)
    })


    //await browser.close();
})();