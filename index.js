const readlineSync=require('readline-sync');
const log=console.log;

let score=0;

let username=readlineSync.question("What is your name? ");




function game(question, answer){
  
  var userAnswer=readlineSync.question(question);
  
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    log("You are Correct");
    score+=1;
  }else{
    log("You are wrong");
  }
  log("Your Score is :", score);
  log("------------------");
}



questions=[
  questionOne={
    question:"What is the capital of Odisha?\x0a\x0a Rourkela \x0a\x0a BBSR \x0a\x0a Cuttack \x0a\x0a Balasore\x0a\x0a",
    
    answer:"BBSR"
  },
  questionTwo={
    question:"What is the highest grossing movie of 2021 in hollywood?\x0a\x0aSpiderman: No Way Home\x0a\x0aDune\x0a\x0aNo Time to Die\x0a\x0aAvatar\x0a\x0a",

    answer:"Spiderman: No Way Home"
  },
  questionThree={
    question:"Who is the President of the USA?\x0a\x0aDonald Trump\x0a\x0aBarack Obama\x0a\x0aJoe Biden\x0a\x0aKamala Harris\x0a\x0a",

    answer: "Joe Biden"
  }
]
for(var i=0; i<questions.length; i++){
  var currentQuestion=questions[i];
  
  game(currentQuestion.question, currentQuestion.answer);
  
}
