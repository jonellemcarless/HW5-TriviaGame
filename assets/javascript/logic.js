var card = $("#quiz-area");

// Question set
var questions = [{
  question: "Who is the current president of France?",
  answers: ["Marine Le Pen", "Emmanuel Macron", "Nicolas Sarkozy", "François Hollande"],
  correctAnswer: "Emmanuel Macron"
}, {
  question: "Which is not a color on the French flag?",
  answers: ["Red", "White", "Gold", "Blue"],
  correctAnswer: "Gold"
}, {
  question: "Which French king built the Palace of Versailles",
  answers: ["Louis XIV", "Louis XV", "Louis XVI", "Louis XVII"],
  correctAnswer: "Louis XIV"
}, {
  question: "In what military conflict did Jeanne d’Arc (Joan of Arc) serve?",
  answers: ["The Seven Years' War", "Hundred Years' War", "The French and Indian War", "La Fronde (1650-1653)"],
  correctAnswer: "Hundred Years' War"
}, {
  question: "Which country does not border mainland France?",
  answers: ["Luxembourg", "Belgium", "Austria", "Italy"],
  correctAnswer: "Austria"
}, {
  question: "France has a large car market with several brands. Which brand of cars did not originate from France?",
  answers: ["Dacia", "Peugeot", "Citroën", "Renault"],
  correctAnswer: "Dacia"
}, {
  question: "Who is not a French philosopher from the Enlightenment era?",
  answers: ["Voltaire", "Molière", "Montesquieu", "Jean-Jacques Rousseau"],
  correctAnswer: "Molière"
}, {
  question: "Identify a type of French red wine:",
  answers: ["Champagne", "Sémillon", "Sauvignon Blanc", "Merlot"],
  correctAnswer: "Merlot"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 100,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>100</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
