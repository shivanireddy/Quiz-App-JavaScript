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

function startQuiz() {
    $('.start-button').click(function(event) {
        displayNextQuestion();
    });
}

function validateAnswer(value) {
    if(value == questions[QUESTION_TRACKER].answer_key) {
        console.log("right answer");
        return true;
    } else {
        console.log("Wrong answer!");
    }
    return false;
}

function updateScore() {
    SCORE_TRACKER++;
}

function updateQuestionTracker() {
    QUESTION_TRACKER++;
}

function resetScore() {
    SCORE_TRACKER = 0;
}

function resetQuestionTracker() {
    QUESTION_TRACKER = 0;
}

