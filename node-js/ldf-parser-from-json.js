const fs = require('fs');

fs.readFile('output.json', (err, data) => {
    if (err) throw err;
    let datas = JSON.parse(data);
    console.log(datas.signals);
});
