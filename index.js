'use strict';

let QUESTION_TRACKER = 0;

let SCORE_TRACKER = 0;

const questions = [
    { question_text: `Which of these Hogwarts professors teaches Transfiguration?`, 
      answer_options: ['Snape', 'Sprout', 'McGonagall', 'Lupin'],
      answer_key: 2 },

    { question_text: `Which Harry Potter word is now in the Oxford English Dictionary?`,
      answer_options: ['Hogwarts', 'Voldemort', 'Muggle', 'Gryffindor'], 
      answer_key: 2 },

    { question_text: `Who were Harry's parents??`,
      answer_options: ['Henry and Maggie Potter', 'William and Elizabeth Potter', 'John and Maggie Potter', 'James and Lily Potter'],
      answer_key: 3 },

    { question_text: `Who first shows Harry the diary of Tom Riddle?`, 
      answer_options: ['Moaning Myrtle', 'Fawkes', 'Nearly Headless Nick', 'Ron'],
      answer_key: 0 },

    { question_text: `Who was NOT a member of the Order of the Phoenix?`,
      answer_options: ['Mad-Eye Moody', 'Bellatrix Lestrange', 'Sirius Black', 'Peter Pettigrew'], 
      answer_key: 1 },

    { question_text: `In the epilogue to "Harry Potter and the Deathly Hallows," to whom is Harry married?`, 
      answer_options: ['Hermione Granger', 'Ginny Weasley', 'Cho Chang', 'Padma Patil'],
      answer_key: 1 },

    { question_text: `What is Lord Voldemort’s real name?`,
      answer_options: ['Tom Marvolo Riddle', 'Tom Marvilo Riddle', 'Tom Marvin Riddle', 'Tom Ravolo Riddle'], 
      answer_key: 0 },

    { question_text: `What is the symbol for the Ravenclaw house?`,
      answer_options: ['Hawk', 'Raven', 'Crow', 'Eagle'],
      answer_key: 3 },

    { question_text: `A person born into a wizarding family who cannot do magic is called…`, 
      answer_options: ['A muggle', 'A half-blood', 'A mudblood', 'A squib'],
      answer_key: 3 },

    { question_text: `How many points is the snitch worth in Quidditch?`,
      answer_options: ['100', '150', '200', '250'], 
      answer_key: 1 },
   
];

function startQuizz() {
    $('.start-button').click(function(event) {
        displayNextQuestion();
    });
}

function validateAnswer(value) {
    if (value == questions[QUESTION_TRACKER].answer_key) {
        console.log("right answer");
        return true;
    } else
        console.log("wrong answer");
    return false;
}

function updateScore() {
    SCORE_TRACKER++;
}

function updateQuestionTracker() {
    QUESTION_TRACKER++;
}

function resetScore(){
  SCORE_TRACKER = 0;
}

function resetQuestionTracker(){
  QUESTION_TRACKER = 0;
}

function displayRightFeeback() {
    $('.main-content').html(`<section class="feedback-page" role="main">
         <h3>You got it right, Keep going!</h3>
         <button type="submit" class="next-question">Next</button>
        </section>`);
    updateScore();
}

function displayWrongFeedback() {
    $('.main-content').html(`<section class="feedback-page" role="main">
         <h3>Sorry, that was a wrong answer! Correct answer is: <br> <br> <span class="answer-text">${questions[QUESTION_TRACKER].answer_options[questions[QUESTION_TRACKER].answer_key]}</span></h3>
         <button type="submit" class="next-question">Next</button>
        </section>`);
}

function submitAnswer() {
    $('.main-content').on('submit', '.question-form', event => {
        event.preventDefault();
        let selectedValue = $("input[name='possible-answers']:checked").val();
        let answerValidity = validateAnswer(selectedValue);
        console.log(answerValidity);
        console.log(selectedValue);
        if (answerValidity) {
            displayRightFeeback();
        } else
            displayWrongFeedback();
    });
}

function handleNextQuestionClick(){
  $('.main-content').on('click', '.next-question', event => {
        event.preventDefault();
        if(QUESTION_TRACKER===9){
        	displayFinalPage();
        }
        else{
        updateQuestionTracker();
        displayNextQuestion();
        }
    });
}

function displayFinalPage(){
	if(SCORE_TRACKER==10){
		$('.main-content').html(`<section class="final-page role="main">
        <h3>Your Score is:
            <br>
            <br>
            <span class="score-number">${SCORE_TRACKER} / 10</span>
            </h3>
        <h4>How dare they call you a Muggle! Take the quiz again and prove them your win was not a fluke.</h4>
        <button type="submit" class="restart-quizz" role="button">Restart</button>
        </section>`);
	}
	else{
	  $('.main-content').html(`<section class="final-page" role="main">
        <h3>Your Score is:
            <br>
            <br>
            <span class="score-number">${SCORE_TRACKER} / 10</span>
            </h3>
        <h4>Not bad! If you think you can do better, click restart.</h4>
        <button type="submit" class="restart-quizz" role="button">Restart</button>
        </section>`);
	}
}

function displayNextQuestion() {
    $('.main-content').html(`<section class= "question-page" role="main">
        <form class="question-form" action="/some-server-endpoint" method ='post'>
        <h4 class="question-text">Q. ${questions[QUESTION_TRACKER].question_text}</h4>
        <fieldset name="answers" class="choices">
        <ul class="radio-buttons" role="radiogroup">
        <li><input type="radio" role="radio" name="possible-answers" id="ans-choice-1" value="0" checked><label for="ans-choice-1">${questions[QUESTION_TRACKER].answer_options[0]}</label></li>
        <li><input type="radio" role="radio" name="possible-answers" id="ans-choice-2" value="1"><label for="ans-choice-2">${questions[QUESTION_TRACKER].answer_options[1]}</label><li>
        <li><input type="radio" role="radio" name="possible-answers" id="ans-choice-3" value="2"><label for="ans-choice-3">${questions[QUESTION_TRACKER].answer_options[2]}</label><li>
        <li><input type="radio" role="radio" name="possible-answers" id="ans-choice-4" value="3"><label for="ans-choice-4">${questions[QUESTION_TRACKER].answer_options[3]}</label><li>
        <ul>
        </fieldset>
        <div class="bottom-container">
        <h4 class="score">Score: <span class="score-text">${SCORE_TRACKER} / 10</span></h4>
        <button class="submit-answer">Submit</button>
        <h4 class="question-number">Question: <span class="question-number-text">${QUESTION_TRACKER+1}</span> / 10</h4>
        </div>
        </form>
        </section>`);

}

function restartQuizz() {
  $('.main-content').on('click', '.restart-quizz', event => {
       resetScore();
       resetQuestionTracker();
       displayNextQuestion();
    });
}

function handleQuizzApp() {
    startQuizz();
    submitAnswer();
    handleNextQuestionClick();
    restartQuizz();
}

$(handleQuizzApp);