const fs = require("fs-extra");

// add .nojekyll
fs.writeFile("production/.nojekyll", "", 'utf8', (err) => {
    if (err) {
        console.error(err);
    }
});

const removePath = (path) => fs.rmSync(path, {recursive: true}, (err) => {
    if (!err) {
        console.log(`${path} is deleted!`);
    }

});

// remove old "docs" folder
try {
    removePath("docs/_next");
} catch (er) {

}

// copy "production" -> "docs"
try {
    fs.copySync("production", "docs")
    console.log('success!')
} catch (err) {
    console.error(err);
}