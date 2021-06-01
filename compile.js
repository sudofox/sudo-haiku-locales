const fs = require('fs');
const gettextParser = require("gettext-parser");

const localeFolder = './messages/';

var locales = {};

fs.readdir(localeFolder, (err, folders) => {
    folders.forEach(folder => {
        let shortcode = folder.substring(0, 2);
        locales[shortcode] = {};

        let messagePath = localeFolder + folder + "/LC_MESSAGES/";

        fs.readdir(messagePath, (err, files) => {
            files.forEach(file => {
                let texts = gettextParser.po.parse(fs.readFileSync(messagePath + "/" + file), "utf8");
                locales[shortcode][file.slice(0, -3)] = {};
                let translations = texts.translations[''];
                if (typeof translations == "undefined") {
                    return;
                }
                Object.entries(translations).forEach(translation => {
                    locales[shortcode][file.slice(0, -3)][translation[1].msgid] = translation[1].msgstr[0];
                });
                console.log("a", locales);
            });
            console.log("b", locales);
        });
        console.log("c", locales);
    })
    console.log("d", locales);
});

console.log("e", locales);
//Object.entries(locales).forEach(thing => { console.log(thing); });
//gettextParser.po.parse(input[, defaultCharset])
