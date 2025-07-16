# 🛡️ Proxy Checker [Node.js]

![Node](https://img.shields.io/badge/Node.js-18%2B-green?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

> **High-speed Proxy Checker** built with **Node.js**.  
> Checks HTTP/HTTPS proxies in parallel with **color logs**, **latency stats**, and exports working proxies to `working.txt`.

---

## 🚀 Features
✔ Fast **parallel proxy testing** (configurable concurrency)  
✔ **Color-coded logs** (Green = Valid, Red = Invalid)  
✔ **Latency display** for valid proxies  
✔ **Export working proxies** to `working.txt`  
✔ **Convert to EXE** for Windows distribution  
✔ Supports **HTTP proxies** (SOCKS optional upgrade)  

---

## 📂 Project Structure
ProxyChecker/
│
├── script.js # Main Node.js proxy checker
├── proxies.txt # Your proxy list (IP:PORT per line)
├── working.txt # Auto-generated working proxies
└── README.md # Documentation


---

## ⚡ Setup

### ✅ Prerequisites
- [Node.js 18+](https://nodejs.org/)
- npm (comes with Node)

### ✅ Install Dependencies
npm install axios https-proxy-agent chalk
📄 Usage
✅ 1. Add your proxies in proxies.txt
makefile
Copy
Edit
192.168.0.1:8080
123.45.67.89:3128
✅ 2. Run the script
bash
Copy
Edit
node script.js
✅ Output:

javascript
Copy
Edit
🔍 Starting Proxy Check (200 proxies)...

✔ VALID: 123.45.67.89:8080 [152ms]
✖ INVALID: 98.76.54.32:3128 (Error: Timeout)

✅ Done! Working proxies saved in working.txt
🖥 Convert to Windows EXE
You can create a standalone .exe without requiring Node.js.

✅ Install pkg
bash
Copy
Edit
npm install -g pkg
✅ Build EXE
bash
Copy
Edit
pkg script.js --targets node18-win-x64 --compress Brotli --output ProxyChecker.exe
✅ Run
Place proxies.txt beside ProxyChecker.exe:

ProxyChecker.exe
🛠 Config
Edit these constants in script.js:

const testUrl = 'http://httpbin.org/ip'; // URL to test
const timeout = 5000; // ms
const concurrency = 10; // proxies checked in parallel
✅ Output Files
working.txt → List of valid proxies

💡 Notes
Use fresh proxies for better results.

Free public proxies are often slow or dead.

Works best with HTTP/HTTPS proxies.

📜 License
MIT License. Free to use and modify.

❤️ Support
If you like this project, give it a ⭐ on GitHub!


---

🔥 Do you want me to now **give you a ZIP-ready project** with:
✔ `script.js` (fully working, colored, concurrency)  
✔ `README.md` (this one)  
✔ `proxies.txt` (empty placeholder)  
✔ `package.json` with all dependencies  

So you can **just extract and run**?  
**Yes or No?**
