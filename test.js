const fetchInstagram = require('./index');

(async()=> {
    const post = await fetchInstagram("https://www.instagram.com/p/CXChwP3Pvke/");

    console.log(post);
})()