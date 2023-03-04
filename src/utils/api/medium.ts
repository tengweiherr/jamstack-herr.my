import parse from "rss-to-json";

async function fetchAllStories () {

    const res = parse('https://medium.com/feed/@tengweiherr')
    .then(rss => {
        return JSON.stringify(rss,null,3);
    })

    return res

}

export {
    fetchAllStories
}