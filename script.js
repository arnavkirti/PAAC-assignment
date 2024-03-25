const questions = [
    { question: "A Famous sequence related to Golden Ratio", answer: "Fibonacci", points: 10 },
    { question: "What is a plane containing Complex numbers called?", answer: "Argand", points: 15 },
    { question: "What is another word for truncated Cone?", answer: "Frustum", points: 5 },
    { question: "A scaler associated with a matrix is called?", answer: "Eigenvalue", points: 20 },
    { question: "What is a Curve of shortest path called?", answer: "Geodesic", points: 10 },
    { question: "What is Kepler's orbit?", answer: "Ellipse", points: 15 },
    { question: "Logic diagram pioneered by John _ _ _ _", answer: "Venn", points: 25 }, 
    { question: "Idea without proof is called?", answer: "Conjecture", points: 10 },
    { question: "Smallest infinite number is called?", answer: "Alephnull", points: 15 },
    { question: "What is the Ramanujan number?", answer: "1729", points: 5 },
  ];
  
  let currentQuestionIndex = 0;
  let totalScore = 0;
  
  function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
      displayResult();
      return;
    }
  
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    document.getElementById("answerInput").value = ""; // Clear answer input
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
    const question = questions[currentQuestionIndex];
    const correctAnswer = question.answer.toLowerCase();
  
    if (userAnswer === correctAnswer) {
      totalScore += question.points;
      document.getElementById("result").textContent = "Correct!";
    } else {
      document.getElementById("result").textContent = "Incorrect!";
    }
  
    currentQuestionIndex++;
    displayQuestion(); 
  }
  
  function displayResult() {
    document.getElementById("question").textContent = "Congratulations! You finished the quiz.";
    document.getElementById("answerInput").style.display = "none"; // Hide answer input
    document.getElementById("result").textContent = `Your total score: ${totalScore}`;
  }
  
  window.onload = displayQuestion;
  