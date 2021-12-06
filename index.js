const puppeteer = require('puppeteer');

require('dotenv').config();

function FetchInstagram(link) {
    return new Promise(async function(resolve, reject) {
        try {
            const ref = link.split('/').filter(el => el !== "").pop();

            const browser = await puppeteer.launch({
                headless: false,
            });
            const page = await browser.newPage();
            await page.goto(`https://imginn.org/p/${ref}/`);

            await page.evaluate(()=> {
                window.scrollTo(0, 100);
            })

            await page.click(".swiper-button-next", {delay: 300})
            await page.click(".swiper-button-next", {delay: 300})
            await page.click(".swiper-button-next", {delay: 300})
            await page.click(".swiper-button-next", {delay: 300})
            await page.click(".swiper-button-next", {delay: 300})

            await page.evaluate(() => {

                const post = {
                    authorImg: document.querySelector(".avatar > img").src,
                    authorNick: document.querySelector(".name").textContent.split(" ")[0],
                    authorNickname: document.querySelector(".nickname").textContent,
                    date: document.querySelector(".date").textContent,
                    desc: document.querySelector(".desc").textContent,
                    media: [...document.querySelectorAll(".content img"), ...document.querySelectorAll(".content video")].map(({src})=> src)
                }

                console.log(post);

                //await browser.close();
            })
            resolve();
        } catch (e) {
            reject(e);
        }   
    
    })
    
};

(async () => { await FetchInstagram('https://www.instagram.com/p/CWoP3rhPkKM/');})()
console.log("AAAAAAAAAAAAAAAAAAAA")