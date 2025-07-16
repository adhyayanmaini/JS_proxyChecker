const fs = require('fs');
const axios = require('axios');
const { HttpsProxyAgent } = require(`https-proxy-agent`);
const readline = require('readline');
const chalk = require('chalk');

const inputFile = 'proxies.txt';
const outputFile = 'working_proxies.txt';
const testUrl = 'http://httpbin.org/ip'; // URL to test the proxy against
const timeout = 5000; //slow validation for now! we will change it later to increase speed and efficency.

//clear old result
fs.writeFileSync(outputFile, '', 'utf-8');

async function checkProxy(proxy) {
    try{
        const agent = new HttpsProxyAgent(`http://${proxy}`);
        const start = Date.now();
        
        await axios.get(testUrl, {
            httpsAgent: agent,
            proxy: false,
            timeout: timeout
        });

        const latency = Date.now() - start;
        console.log(chalk.green(`Working proxy: ${proxy} | Latency: ${latency}ms`));
        fs.appendFileSync(outputFile, `${proxy} | Latency: ${latency}ms\n`, 'utf-8');
    } catch (error) {
        console.log(chalk.red(`Failed proxy: ${proxy} | Error: ${error.message}`));
    }
}

async function processProxies() {
    console.log(chalk.blue.bold('\n🔍 Starting Proxy Check... | Made by Adhyayan Maini\n'));

    const rl = readline.createInterface({
        input: fs.createReadStream(inputFile),
        crlfDelay: Infinity
    });

    let count = 0;

    for await (const line of rl) {
        const proxy = line.trim();
        if (proxy) {
            count++;
            console.log(chalk.white(`Checking proxy ${count}: ${proxy}`));
            await checkProxy(proxy);
        }
    }

    console.log(chalk.green.bold('\n✅ Done! Working proxies saved in working_proxies.txt\n'));
}

processProxies().catch(err => console.error(err));
