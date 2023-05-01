const questions = [
    {
      question: "What type of a language is HTML?",
      options: ["Scripting Language", "Network Protocol", "Markup Language","Programming Language"],
      answer: "Markup Language"
    },
    {
      question: "What should be the first tag in any HTML Document?",
      options: ["<html>", "<head>", "<!doctype html>", "<title>"],
      answer: "<!doctype html>"
    },
    {
      question: "What tag is used to display a picture in a HTML page",
      options: ["Picture", "Img", "Image", "Src"],
      answer: "Img"
    }
  ];
  
  const root = document.getElementById('root');
  
  let currentQuestion = 0;
  let score = 0;
  
  const handleAnswerClick = () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked').value;
    if (selectedOption === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    render();
  }
  
  const render = () => {
    const template = currentQuestion < questions.length ? (
      `<div>
        <h1>Quiz Game</h1>
        <h2>${questions[currentQuestion].question}</h2>
        <form>
          ${questions[currentQuestion].options.map((option, index) => (
            `<div key=${index}>
              <input type="radio" id="option${index + 1}" name="answer" value="${option}">
              <label for="option${index + 1}">${option}</label>
            </div>`
          )).join('')}
          <button type="button" onclick="handleAnswerClick()">Submit</button>
        </form>
        <p>Score: ${score}</p>
      </div>`
    ) : (
      `<div>
        <h1>Quiz Game</h1>
        <p>Game over! Your score is ${score}.</p>
      </div>`
    );
    root.innerHTML = template;
  }
  
  render();
  