//SEQUENCE PRACTICE PROBLEMS

//1
{
    let digit = Math.floor(Math.random()*10);
    console.log(digit);
}

//2
{
    let digit = Math.floor(Math.random()*10)%6+1;
    console.log("Dice Roll: "+digit);
}

//3
{
    let dice1 = Math.floor(Math.random()*10)%6+1;
    let dice2 = Math.floor(Math.random()*10)%6+1;
    let sum = dice1+dice2;
    console.log("Dice Roll Sum: "+sum);
}
