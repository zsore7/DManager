dm_utils = require('./js/dm_utils.js')

alert('index.js is loaded')

function new_fun(){
    alert('new in index.js')
}

function test_roll(){
    n = document.getElementById('n').value;
    s = document.getElementById('s').value;
    result = dm_utils.rollDice(n, s);
    document.getElementById('out').innerText = result;
}

module.exports = {
    'new_fun': new_fun,
    'test_roll': test_roll,
}
