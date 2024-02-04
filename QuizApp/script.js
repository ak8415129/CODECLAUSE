const questions=[
    {
        question:"which is the largest animal in the world?",
        answer:[
            {text:"Shark" ,correct:false},
            {text:"Blue Whale" ,correct:true},
            {text:"Elephant" ,correct:false},
            {text:"Giraffe" ,correct:false},
        ]
    }, 
    {
        question:"2which is the largest animal in the world?",
        answer:[
            {text:"Shark" ,correct:false},
            {text:"Blue Whale" ,correct:true},
            {text:"Elephant" ,correct:false},
            {text:"Giraffe" ,correct:false},
        ]
    }, 
    {
        question:"3which is the largest animal in the world?",
        answer:[
            {text:"Shark" ,correct:false},
            {text:"Blue Whale" ,correct:true},
            {text:"Elephant" ,correct:false},
            {text:"Giraffe" ,correct:false},
        ]
    }, 
    {
        question:"4which is the largest animal in the world?",
        answer:[
            {text:"Shark" ,correct:false},
            {text:"Blue Whale" ,correct:true},
            {text:"Elephant" ,correct:false},
            {text:"Giraffe" ,correct:false},
        ]
    },

]; 

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    
    showQuestion();
} 
function showQuestion()
{     
    resetState();
    let currentQuestion=questions[currentQuestionIndex]; 
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question; 

    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
} 
function resetState()
{
    nextButton.style.display="none";
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }
} 

function selectAnswer(e)
{
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=="true";
   
    if(isCorrect)
    {
        selectedBtn.classList.add("correct"); 
        score=score+1;

    } 
    else{
        selectedBtn.classList.add("incorrect");
    }  
    currentQuestionIndex=currentQuestionIndex+1;
    resetState();
    
}
startQuiz();