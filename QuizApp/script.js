const questions=[
    {
        question:"Who is the father of C language ?",
        answer:[
            {text:"Steve Jobs" ,correct:false},
            {text:"Dennis Ritchie" ,correct:true},
            {text:"Elon Musk" ,correct:false},
            {text:"John Taitor" ,correct:false},
        ]
    }, 
    {
        question:"Which of the following cannot be a variable name in C",
        answer:[
            {text:"volatile" ,correct:true},
            {text:"true" ,correct:false},
            {text:"Elephant" ,correct:false},
            {text:"friend" ,correct:false},
        ]
    }, 
    {
        question:"What is an example of iteration in C?",
        answer:[
            {text:"for" ,correct:false},
            {text:"while" ,correct:false},
            {text:"do-while" ,correct:false},
            {text:"All" ,correct:true},
        ]
    }, 
    {
        question:"Which of the following is not a type of constructor?",
        answer:[
            {text:"Copy" ,correct:false},
            {text:"Parameterised" ,correct:false},
            {text:"Friend" ,correct:true},
            {text:"Default" ,correct:false},
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
    questionElement.innerHTML=questionNo+"."+currentQuestion.question; 

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
   Array.from(answerButton.children).forEach(button=>{
    
    if(button.dataset.correct=="true")
    {
        button.classList.add("correct");
    }
     button.disabled=true;
   });
    nextButton.style.display="block";
} 
  function showScore(){
    resetState();
    questionElement.innerHTML=`You Score: ${score} out of ${questions.length} !`; 

    nextButton.innerHTML="Play Again" ;
    nextButton.style.display="block";

  }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    } 
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
      handleNextButton();
    } 
    else{
        startQuiz();
    }
})
startQuiz();