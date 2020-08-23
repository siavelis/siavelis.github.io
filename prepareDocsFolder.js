const fs = require("fs-extra");

const removeFolder = (dir) => fs.rmdirSync(dir, {recursive: true}, (err) => {
    if (err) {
        throw err;
    }

    console.log(`${dir} is deleted!`);
});
//
// fs.unlinkSync("production/.git", (err) => {
//     if (err) {
//         throw err;
//     }
//
//     console.log(`production/.git is deleted!`);
// });

// copy worktree related information to production folder
fs.copyFileSync("docs/.git", "production/.git", (err) => {
    if (err) {
        throw err;
    }
});

// add .nojekyll
fs.writeFile("production/.nojekyll", null, 'utf8', (err) => {
    if (err) {
        throw err;
    }
});

// remove old "docs" folder
removeFolder("docs");

// copy "production" -> "docs"
try {
    fs.copySync("production/", "docs/")
    console.log('success!')
} catch (err) {
    debugger
    throw err;
}