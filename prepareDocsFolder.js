const fs = require("fs-extra");

// add .nojekyll
fs.writeFile("production/.nojekyll", "", 'utf8', (err) => {
    if (err) {
        console.error(err);
    }
});

const removePath = (path) => fs.rm(path, {recursive: true}, (err) => {
    if (!err) {
        console.log(`${path} is deleted!`);
    }

});

// remove old "docs" folder
removePath("docs/_next");

// copy "production" -> "docs"
try {
    fs.copySync("production", "docs")
    console.log('success!')
} catch (err) {
    console.error(err);
}