/* playEven and odds() is a function used to simulate a evan and odds game.
    //use for the week 3 assignment
    */
    function playEvenandodds() {
   console.log("playEvensandodds() started");
    //roll the dice
    var die1= 1 + Math.floor(20* Math.random());
    console.log(die1);
    document.getElementById("die1Res").innerHTML = die1
    var die2= Math.ceil(20* Math.random());
    console.log(die2);
    document.getElementById("die2Res").innerHTML = die2
   
    //find sum of the two dice
    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = sum

    //if sum = 7 or 11 they lose
if (sum == 7|| sum == 11){
    document.getElementById("FinRes").innerHTML = "You lose! Please try again."
}
    //if sum doubles and even, then they win
    else if (die1 == die2 && die1%2 == 0){
        document.getElementById("FinRes").innerHTML = "You Win! Great Job."
    } else{  
    //otherwise, they draw
    document.getElementById("FinRes").innerHTML = "You did not win or lose. Try your luck again.";
    }
}
/*
While loop Examples
*/
function whileLoopExample(){
  
  /*while(true){
    console.log("Looping");
  }*/

  let i = 0;

  while(i < 10){
    console.log(i);
    i++;
  }

  let j = 0
  
  while(j != 2){
    console.log("Not 2: "  + j);
    j = 1 + Math.floor(6 * Math.random());
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    //Infinte Loop
   /*while(true){
    console.log("Infinte loop");
   }*/
   // Loop that counts up 10 times.
   /*let i = 0;
   while(i < 10){
    console.log(i);
    i++;
}*/
// Loop that exits using sentinel
/*let j = 0;
while(j != 2){
    console.log("Not 2: "  + j);
    j = 1 + Math.floor(6 * Math.random());
}
document.getElementById("whileRes").innerHTML = "Got 2!";*/

}

/*
Do-While Loop Examples
*/
function doWhileLoopExample(){
    let i = 0;
    
    do{
        console.log(i);
        i++;
    } while(i < 0)
    
    document.getElementById("doWhileRes").innerHTML = i;
}

/*
For Loop Example
*/
function ForLoopExample(){
    // i += 2, i = 1 + (2 * i)
    // for (;;)
    for(let i = 0; i < 100; i = 1 + (2 * i)){
        console.log(i);
    }
    document.getElementById("forLoopRes").innerHTML = "For Loop Terminated!";
    /*for(let i = 0; i < 10; i++){
        console.log("Outer Loop: " + i);
        for(let j = 0; j < 10; j++){
            console.log(Inner Loop: " + i);
        }
    }*/
}