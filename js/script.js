var questions = []

var score = 0;

for (var i = 0; i < questions.length; i++){
    //what ever i put in the () is what the user will see 
    var response = window.prompt(questions[i].prompt);
    
    if (response === questions[i].answer) {
        score++;
        alert("CORRECT! Great job!"); 
    }
    else {
        alert("Incorrect"); 
    }
}
alert("you got" + score + "/" + questions.length); 
var questions = [
    {
        prompt:
            "What is the correct semantics for body in a html file?\n (a) <b>\n (b) <body>\n (c) <bod>\n (d) <p>",
        answer: "b"
    }, 
