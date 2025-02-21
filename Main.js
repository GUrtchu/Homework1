const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'hello.txt');

fs.writeFile(filePath, 'Hello World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File created successfully:', filePath);
    }
});


function getday() {
    const days = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'];
    const today = new Date().getDay();
    return days[today];
}

console.log(getday());

