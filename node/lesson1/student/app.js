const fs = require('fs');
const path = require('path');

let pathToLesson18 = path.join(process.cwd(), 'lessonTo18');
let pathToLesson20 = path.join(process.cwd(), 'lessonTo20');


let reaname = (oldFolder, newFolder, files) => {
    fs.rename(path.join(oldFolder, files), path.join(newFolder, files), err => { 
        if (err) {
            console.log(err)
        }
    })   
}

let read = (oldFolder, newFolder) => {
    fs.readdir(oldFolder, (err, files) => { 
        if (err) {
            console.log(err)
            return
        }
        files.forEach(file =>
            reaname(oldFolder, newFolder,file))
    })
}

read(pathToLesson18, pathToLesson20)
read(pathToLesson20, pathToLesson18)