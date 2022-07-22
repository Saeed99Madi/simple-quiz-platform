// LIST OF QUESTIONS
const QUESTIONS = [
  {
    question: "The capital of Palestine is ........",
    answers: {
      1: "Prague",
      2: "Damascus",
      3: "Jerusalem",
      4: "Toronto",
    },
    correctAnswer: 3,
  },
  {
    question: "The capital of Portugal is ........",
    answers: {
      1: "Berlin",
      2: "New Delhi",
      3: "Lisbon",
      4: "Toronto",
    },
    correctAnswer: 3,
  },
  {
    question: "The capital of Spain is ........",
    answers: {
      1: "Gaza",
      2: "Cairo",
      3: "Moscow",
      4: "Madrid",
    },
    correctAnswer: 4,
  },
  {
    question: "The capital of Jordan is ........",
    answers: {
      1: "Amman",
      2: "Newyork",
      3: "Beruit",
      4: "Toronto",
    },
    correctAnswer: 1,
  },
  {
    question: "The capital of Japan is ........",
    answers: {
      1: "Prague",
      2: "Tokyo",
      3: "Moscow",
      4: "Bejing",
    },
    correctAnswer: 2,
  },
  {
    question: "The capital of Russia is ........",
    answers: {
      1: "Cairo",
      2: "Keiv",
      3: "Moscow",
      4: "Toronto",
    },
    correctAnswer: 3,
  },
  {
    question: "The capital of Egypt is ........",
    answers: {
      1: "Benghazi",
      2: "Alexandria",
      3: "Cairo",
      4: "Damascus",
    },
    correctAnswer: 3,
  },
  {
    question: "The capital of India is ........",
    answers: {
      1: "Prague",
      2: "New Delhi",
      3: "Moscow",
      4: "Berlin",
    },
    correctAnswer: 2,
  },
  {
    question: "The capital of Morroco is ........",
    answers: {
      1: "Morroco",
      2: "Rabat",
      3: "Benghazi",
      4: "Madrid",
    },
    correctAnswer: 2,
  },
  {
    question: "The capital of USA is ........",
    answers: {
      1: "Hollywood",
      2: "New Delhi",
      3: "Washington",
      4: "Toronto",
    },
    correctAnswer: 3,
  },
];

let user = localStorage.getItem("user");

let question_container = document.querySelector(".questions-box");
let home = document.querySelector("#Explanation");
question_container.style.display = "none";

let userName = document.querySelector("#userName");
let count = 0;
let mark = 0;
let startbtn = document.querySelector(".btn1");
let nextBtn = document.querySelector(".next-question-button");

let counter = document.querySelector(".num-of-question");
let que = document.querySelector("#question");

//answers options
let aText = document.querySelector("#text1");
let bText = document.querySelector("#text2");
let cText = document.querySelector("#text3");
let dText = document.querySelector("#text4");
const optionsContainer = document.getElementById("options");

startbtn.addEventListener("click", () => {
  if (userName.value) {
    user = userName.value;
    localStorage.setItem("user", user);
    loadGame(count);
  } else {
    alert("Name Field Is Empty");
  }
});

nextBtn.addEventListener("click", () => {
  //get all options
  const options = document.querySelectorAll('input[name="option"]');
  let option;
  //check the checked radio button
  for (const ele of options) {
    if (ele.checked) {
      option = ele;
      break;
    }
  }

  //if any radio buttons checked it will pass to the nect question
  if (option) {
    //check the count if less than 10
    checkAnswer(QUESTIONS[que.id], option);

    if (count < 10) {
      //if counter more than 9 the button will renderd with finiish text
      if (count === 9) {
        nextBtn.textContent = "Finish";
      }
      loadGame(count);
    } else {
      saveToLockalStorage("score", mark);
      window.location.href = "../resultPage.html";
    }
  } else {
    alert("make sure that u checked your answer");
  }
});
//function that check the answer is right or wrong (questions , choice)
function checkAnswer(obj, choice) {
  console.log(choice);
  if (obj.correctAnswer == choice.value) {
    mark++;
  }
}

function loadGame(i) {
  home.style.display = "none";
  question_container.style.display = "";
  count++;
  renderQuestion(QUESTIONS[i]);
}
function saveToLockalStorage(value, key) {
  localStorage.setItem(value, key);
}
function getFromLocalSrorage(key) {
  localStorage.getItem(key);
}

function renderQuestion(qs) {
  counter.textContent = count + "/10";
  que.textContent = qs.question;

  que.setAttribute("id", QUESTIONS.indexOf(qs));
  optionsContainer.textContent = "";

  const options = Object.values(qs.answers).map((option, keyO) => {
    const optionContainer = document.createElement("div");
    const optionInput = document.createElement("input");
    const optionLabel = document.createElement("label");
    // console.log(option, "option");

    optionContainer.classList.add("option");
    optionInput.setAttribute("type", "radio");
    optionInput.setAttribute("name", "option");
    optionInput.setAttribute("value", keyO + 1);
    optionLabel.textContent = option; // add text content for label
    optionLabel.setAttribute("id", option);

    optionContainer.appendChild(optionInput);
    optionContainer.appendChild(optionLabel);

    return optionContainer;
  });

  console.log(options.length);

  options.forEach((option, index) => {
    console.log(index);
    optionsContainer.appendChild(option);
  });
}
