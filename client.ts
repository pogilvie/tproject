import got from 'got';


async function main() {
    const { data } = await got.post('https://httpbin.org/anything', {
        json: {
            hello: 'world'
        }
    }).json() as any;
    
    console.log(data);
    //=> {"hello": "world"}
}

main();