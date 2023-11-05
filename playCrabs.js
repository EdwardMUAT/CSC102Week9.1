function playCrabs() {
    /* playCrabs() is a function used to simulate a craps game.
    //use for the week 3 assignment*/
    console.log("playCrabs() stated");
    //roll the dice
    var die1 = 20 * Math.random();
    console.log(die1);
    var die2 = Math.ceil(20 * Math.random());
    console.log.die2();

    if (die1 < 1) {
        console.log("fails test, figure it out!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
    //find sum of the two dice
    //if sum = 7 or 11, they lose
    //if sum doubles and even, then they win
    //otherwise, they draw
}
