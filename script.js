// Quiz Questions
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "Who is the founder of Microsoft?",
      options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
      answer: "Bill Gates"
    }
  ];
  
  let currentQuestion = 0;
  
  // Load a question
  function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;
  
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      answersDiv.appendChild(btn);
    });
  
    document.getElementById("result").textContent = "";
  }
  
  // Check Answer
  function checkAnswer(selectedOption) {
    const correct = quizData[currentQuestion].answer;
    const resultText = selectedOption === correct ? "✅ Correct!" : `❌ Wrong! Correct: ${correct}`;
    document.getElementById("result").textContent = resultText;
  
    // Go to next question after 2 seconds
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        document.getElementById("question").textContent = "Quiz Completed!";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("result").textContent = "";
      }
    }, 2000);
  }
  
  // Load first question on page load
  window.onload = () => {
    loadQuestion();
  };
  // Joke API Function
function getJoke() {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(response => response.json())
      .then(data => {
        const jokeText = `${data.setup} 😄 ${data.punchline}`;
        document.getElementById("joke").textContent = jokeText;
      })
      .catch(error => {
        document.getElementById("joke").textContent = "Oops! Couldn't fetch a joke right now.";
        console.error("Error fetching joke:", error);
      });
  }
  