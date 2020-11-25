console.log("test node");

// const fs = require('fs');
const fs = require('fs.extra');
const path = require('path');

const s2018 = path.join(process.cwd(), 'node-hw-1', 'data', '2018');
const s2020 = path.join(process.cwd(), 'node-hw-1', 'data', '2020');

// fs.mkdir(path.join(process.cwd(), 'node-hw-1', 'data', 'temp'), 
//     {
//         recursive: true}, err => { 
//         console.log(err); 
//     });
const temp = path.join(process.cwd(), 'node-hw-1', 'data', 'temp');

function moveUsers(newFolder, oldFolder) {
    
    fs.move(newFolder, oldFolder, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Success copy files from  " + `${newFolder}` + "  to  " + `${oldFolder}` );
    })
}

moveUsers(s2018, temp);
setTimeout(() => moveUsers(s2020, s2018), 3000);
setTimeout(() => moveUsers(temp, s2020), 5000);

// function moveUsers(newFolder, oldFolder, temp) {
    
    // fs.move(newFolder, temp, function (err) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log("success!");
    // })
    // fs.move(oldFolder, newFolder, function (err) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log("success!");
    // })
    // fs.move(temp, oldFolder, function (err) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log("success!");
    // })
// }

// moveUsers(s2018, s2020, temp);
