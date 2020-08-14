const _ = require('lodash');
const emojis = ["😺","😸","😹","😻","😼","😽","🙀","😿","😾"];

export const addEmoji = (string) =>{
    return string + emojis[Math.floor(Math.random(0) * Math.floor(emojis.length))];
}