const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const levelText = document.querySelector("#level");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let countLevel = 1;

let questions = [
  {
    question: "¿Qué significan las siglas de FIFA?",
    choice1: " Federación Internacional de Fútbol Asociación",
    choice2: "Federación  Internacional de Franelas Asociadas",
    choice3: "Federación  Internacultural de Football Asociados",
    choice4: "Federación  Internacional de flores Asociados",
    answer: 1,
    level: 1,
  },
  {
    question: "¿En qué deporte destaca Leonel Messi? ",
    choice1: "Voleybol",
    choice2: "Sóftbol",
    choice3: "Futbol",
    choice4: "Tenis",
    answer: 3,
    level: 1,
  },
  {
    question: "¿Cuántos puntos vale un tiro libre en el basket?",
    choice1: "5",
    choice2: "10",
    choice3: "3",
    choice4: "1",
    answer: 4,
    level: 1,
  },
  {
    question: "¿Cuál es la duración de un partido de fútbol?",
    choice1: "120 minutos",
    choice2: "90 minutos",
    choice3: "70 minutos",
    choice4: "45 minutos",
    answer: 2,
    level: 1,
  },
  {
    question: "¿Cuál es la ciudad anfitriona de las Olimpiadas de 2021?",
    choice1: "Medellín, Antioquia",
    choice2: "kioto, Japón",
    choice3: "Sydney, Australia",
    choice4: "Tokio, Japón",
    answer: 4,
    level: 1,
  },
  {
    question: "¿Cuál es el país con menos habitantes del mundo?",
    choice1: "Colombia",
    choice2: "La Ciudad del Vaticano",
    choice3: "Rusia",
    choice4: "Canada",
    answer: 2,
    level: 2,
  },
  {
    question: "¿Cuántos lados tiene un heptágono?",
    choice1: "5",
    choice2: "8",
    choice3: "7",
    choice4: "9",
    answer: 3,
    level: 2,
  },
  {
    question: "¿Cuál es el animal que más muertes provoca cada año?",
    choice1: "El Leon",
    choice2: "La Araña",
    choice3: "El mosquito",
    choice4: "La Serpiente",
    answer: 3,
    level: 2,
  },
  {
    question: "¿Cuál es el planeta más grande del Sistema Solar?",
    choice1: "Júpiter",
    choice2: "Plutón",
    choice3: "Marte",
    choice4: "La Luna",
    answer: 1,
    level: 2,
  },
  {
    question: "¿Cuál es el nombre de especie de los seres humanos?",
    choice1: "Homo Erectus",
    choice2: "Homo sapiens",
    choice3: "Homo Humano",
    choice4: "Homo sapiens sapiens",
    answer: 4,
    level: 2,
  },
  {
    question: "¿En qué año fue el descubrimiento de América?",
    choice1: "1500",
    choice2: "1910",
    choice3: "1492",
    choice4: "1999",
    answer: 3,
    level: 3,
  },
  {
    question: "¿Cuál es el idioma más hablado del mundo?",
    choice1: "Chino Mandarín",
    choice2: "Ingles",
    choice3: "Español",
    choice4: "Aleman",
    answer: 1,
    level: 3,
  },
  {
    question: "¿En qué países se encuentra el Everest?",
    choice1: "China y Nepal",
    choice2: "Korea y china",
    choice3: "Nepal y Korea",
    choice4: "China y Japón",
    answer: 1,
    level: 3,
  },
  {
    question: "¿Cómo fue destruida la biblioteca de Alejandría?",
    choice1: "Enterrada",
    choice2: "Destruida por un Terremoto",
    choice3: "Saqueada",
    choice4: "Quemada por un Incendio",
    answer: 3,
    level: 3,
  },
  {
    question: "¿Cuántos años duró la guerra de los 100 años?",
    choice1: "100",
    choice2: "116",
    choice3: "99",
    choice4: "110",
    answer: 2,
    level: 3,
  },
  {
    question: "¿Quién es el autor de La Odisea?",
    choice1: "Homero",
    choice2: "William Shakespeare",
    choice3: "Edvard Munch",
    choice4: "Gabriel García Márquez",
    answer: 1,
    level: 4,
  },
  {
    question: "¿Quién dirigió la película 2001: Una odisea en el espacio?",
    choice1: "Martin Scorsese",
    choice2: "George Lucas",
    choice3: "Steven Spielberg",
    choice4: "Stanley Kubrick",
    answer: 4,
    level: 4,
  },
  {
    question: "¿De qué pintor es la obra El grito?",
    choice1: "Vincent van Gogh",
    choice2: "Yann Tiersen",
    choice3: "Edvard Munch",
    choice4: "Matthew Perry",
    answer: 3,
    level: 4,
  },
  {
    question: "¿Cuánto mide el David de Miguel Ángel?",
    choice1: "1.85 M",
    choice2: "poco mas de  10 M",
    choice3: "7.5 M",
    choice4: "poco mas de 5 M",
    answer: 4,
    level: 4,
  },
  {
    question: "¿Quién asesinó al rey Hamlet en la obra de Shakespeare?",
    choice1: "Se  suicidó",
    choice2: "Su Hermano Claudio",
    choice3: "su Enamorada Ofelia",
    choice4: "Su Madre Gertrudis",
    answer: 2,
    level: 4,
  },
  {
    question: "¿Cuántos gramos son 100 mililitros?",
    choice1: "1000 gramos ",
    choice2: "100 gramos",
    choice3: "10 gramos",
    choice4: "1 gramo",
    answer: 2,
    level: 5,
  },
  {
    question: "¿Cuál es el elemento más abundante de la Tierra?",
    choice1: "El boro",
    choice2: "El Carbono",
    choice3: "El Litio",
    choice4: "El hidrógeno",
    answer: 4,
    level: 5,
  },
  {
    question: "¿Cuál es el animal más venenoso del mundo?",
    choice1: "La aveja asesina",
    choice2: "La Serpiente Mamba Negra",
    choice3: "La Medusa Avispa de Mar",
    choice4: "La Araña  Viuda Negra",
    answer: 3,
    level: 5,
  },
  {
    question: "¿Dónde se realizó el primer trasplante de corazón humano?",
    choice1: "Sudáfrica",
    choice2: "Alemania",
    choice3: "Reino Unido",
    choice4: "Rusia",
    answer: 1,
    level: 5,
  },
  {
    question: "¿Cuál es el ser vivo más grande del mundo?",
    choice1: "La Jirafa",
    choice2: "La Ballena Azul",
    choice3: "El Elefante",
    choice4: "La Armillaria",
    answer: 4,
    level: 5,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 25;

startGame = () => {
  questionCounter = 0;
  score = 0;
  levelUp();
  getNewQuestion();
};

levelUp = () => {
  availableQuestions = questions.filter(question => question.level === countLevel);
};

giveUp = () => {
  localStorage.setItem("mostRecentScore", score);
  return window.location.assign("/end.html");
};


getNewQuestion = () => {
  if (questionCounter > MAX_QUESTIONS || countLevel === 6) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/end.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  
  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);

    if (classToApply === "incorrect") {
      return window.location.assign("/lose.html");
    }

    if (availableQuestions.length === 0 ) {
      countLevel ++;
      levelUp();
      incrementLevel();
    }
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

incrementLevel = () => {
  switch (countLevel) {
    case 2:
      levelText.innerText = "Lv2. Cultura General";
      break;
    case 3:
      levelText.innerText = "Lv3. Geografia e historia";
      break;
    case 4:
      levelText.innerText = "Lv4. Arte y cultura";
      break;
    case 5:
      levelText.innerText = "Lv5. Ciencia";
      break;
    default:
      break;
  }
};

startGame();
