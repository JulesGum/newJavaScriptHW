const fs = require('fs');
const path = require('path');

let Ivan = path.join(process.cwd(), 'timeToLessons18', 'Ivan.txt')

console.log(Ivan)

// fs.readdir(path.join(process.cwd(), 'students', 'timeToLessons18'), ((err, files) => { 
//     if (err) { 
//         console.log(err)
//     } else console.log(files)
// }))

fs.unlink()