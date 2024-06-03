let btns = document.querySelectorAll("button")
let scoreArea = document.querySelector(".scoreArea")

//btns[0]
//btns[1]

//btns[0].addEventListener('click', toss)
//btns[1].addEventListener('click', toss)

for(let t of btns){
    t.addEventListener('click', function(){toss(t)});
}

// function addEventListener(t1, t2){
//     //t2 = function(){toss(t1)}

//     function t2(){
//         toss(t1)
//     }
//     t2();
// }

let userScore = 0;
let compScore = 0;
function toss(clickedButton){
    //console.log(clickedButton);

    let userChoice = clickedButton.innerText;
    let choices = ["Head", "Tail"];
    let randomIdx = parseInt(Math.random()*choices.length); //gives 0 or, 1
    let computerchoice = choices[randomIdx];
    if(userChoice == computerchoice){
        //console.log("User Wins!!!");
        userScore++;
    }
    else{
        console.log("Computer Wins!!!");
        compScore++;
    }

    // scoreArea.innerText = `User Score = ${userScore} and Computer Score = ${compScore}`
    scoreArea.innerHTML = ` <h3>User: ${userScore} </h3> 
                            <h3> Computer: ${compScore}</h3> `
    
    // scoreArea.style.color = "green"
    // scoreArea.style.border = "1px solid black"
    // scoreArea.style.backgroundColor = "lightgreen"
    // scoreArea.style.textAlign = "center"

    scoreArea.style.cssText = `
        color: green;
        border: 1px solid black;
        background-color: lightgreen;
    `

    
}



