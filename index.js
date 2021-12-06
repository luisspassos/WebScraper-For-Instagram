const puppeteer = require('puppeteer');

module.exports = function FetchInstagram(link) {
    return new Promise(async function (resolve, reject) {
        try {
            const ref = link.split('/').filter(el => el !== "").pop();

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(`https://imginn.org/p/${ref}/`);

            const post = await page.evaluate(() => {

                const imgs = [...document.querySelectorAll(".content img")].map(el => el.getAttribute("data-src"));
                const videos = [...document.querySelectorAll(".content video")].map(el => el.getAttribute("src"));

                const post = {
                    authorImg: document.querySelector(".avatar > img").src,
                    authorNick: document.querySelector(".name").textContent.split(" ")[0],
                    authorNickname: document.querySelector(".nickname").textContent,
                    date: document.querySelector(".date").textContent,
                    desc: document.querySelector(".desc").textContent,
                    media: [...imgs, ...videos],
                    comments: [...document.querySelectorAll(".comment")].map((_, i) => ({
                        comment: document.querySelectorAll(".comment .text")[i].textContent,
                        author: document.querySelectorAll(".comment .name")[i].textContent,
                        authorImg: document.querySelectorAll(".comment img")[i].getAttribute("data-src")
                    }))
                }

                return post
            })

            await browser.close();

            return resolve(JSON.stringify(post, null, 2))
        } catch (e) {
            console.error(e);
            reject("Your URL is invalid");
        }

    })

};

