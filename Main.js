
const fs = require('fs/promises');

async function main() {
await fs.writeFile('index.html', '<div>Hello World</div>');
}

main()