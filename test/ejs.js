// test/ejs.js

const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const template = fs.sendFileSync(path.resolve(__dirname, './test.html'), 'utf-8');
const profileData = require('./testInfo.json');
const html = ejs.render(template, { profileData: profileData });

console.log(html);
