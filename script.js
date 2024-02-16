// const request=fetch("https://cat-fact.herokuapp.com/facts")

// request.then((response)=>{
//      return response.json();
// })
// .then((data)=>{
//     console.log(data);
// }).catch((error)=>{

//     console.error("Error fetching data:", error);
// })

const questionObj = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

let totalScore = 0;
let currentIndex=0;
let total=questionObj.length;

 ///destructuring

const questionEl = document.querySelector("#question");
const optionsEl = document.querySelector("#options");
const score = document.querySelector("#score");
const nextEl=document.querySelector("#next");

nextEl.addEventListener("click",nextQuestion)
showQuestion();

function showQuestion(){    //all inside code repeated for each question thats why we write it inside a function

const { correctAnswer, options, question } = questionObj[currentIndex];
//setting the question
questionEl.textContent = question; //because of destructuring instaed of accesing questionObj.question access only question

// for loop on shuffledoption 
const shuffledOptionsEl=shuffledOptions(options);


shuffledOptionsEl.forEach((opt) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = opt;
  optionsEl.appendChild(buttonEl);

  // to check the selected answer is correct or not

  buttonEl.addEventListener("click", () => {
    const trimmedOpt = opt.trim(); // Trim extra spaces
    const trimmedCorrectAnswer = correctAnswer.trim(); // Trim extra spaces
    if (trimmedOpt == trimmedCorrectAnswer) {
      totalScore++;
    } else {
      totalScore = totalScore - 0.25;
    }
    
    score.textContent = `Score: ${totalScore}/ ${total}`;
    nextQuestion();
  });
});
}
 function nextQuestion(){
   // add next question 
   currentIndex++;
   optionsEl.innerHTML='';   //to remove previous question content
    if(currentIndex >= questionObj.length){
     const emoji = "😊";
     questionEl.textContent = emoji+"Congratulations!!!! Quiz Completed"+ emoji;   
     optionsEl.remove();
    }
    else{
     showQuestion();
    }
 }
// shuffling the options on refresh

function shuffledOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}


