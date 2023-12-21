
const { uniqueNamesGenerator, colors, adjectives, animals } = require('unique-names-generator');

const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });

const { generateUsername } = require("unique-username-generator");


function loginStatus(delimiter, numbers, length) {
    console.log(`Ваш логин: ${generateUsername(delimiter, numbers, length)} и Вам присвоен статус: ${randomName}`);
}

module.exports = { loginStatus };