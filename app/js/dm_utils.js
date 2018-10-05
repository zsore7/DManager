function rollDice(number, sides){
    sum = 0;
    for (var i=0; i<number; i++){
        sum += Math.floor(Math.random() * sides)+1
    }
    return sum
}

module.exports = {
    "rollDice": rollDice,
}
