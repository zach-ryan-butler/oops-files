const fs = require('fs');

function createFile(name, content) {
    fs.writeFile(name, content, err => {
        if(err) console.error(err);
        console.log(`Created file ${name}.`);
    });
}


for(let i = 1; i < 100; i++) {
    const words = ['dinosaur', 'weird', 'wizard', 'dragon', 'drake', 'goblin', 'planeswalker'];
    const random = Math.floor(Math.random() * words.length);
    createFile(`./files/${i}.txt`, words[random]);
}
